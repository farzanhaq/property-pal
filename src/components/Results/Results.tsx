import { FilterOutlined } from "@ant-design/icons";
import API, { graphqlOperation } from "@aws-amplify/api";
import { Divider, message, Spin, Table, Typography } from "antd";
import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { listScreenings, listUnits } from "../../graphql/queries";
import {
  BathroomsKind,
  BedroomsKind,
  BudgetKind,
  OccupancyKind,
  SqftKind
} from "../../utils/enums";
import { StyledDiv, StyledLoadingDiv } from "../Styles/Div.style";
import { StyledLoadingIcon } from "../Styles/LoadingOutlined.style";
import { StyledSubtitle, StyledTitle } from "../Styles/Title.style";

const { Column } = Table;

const loadingIcon: JSX.Element = <StyledLoadingIcon spin />;
interface Unit {
  id: string;
  unit_number: number;
  price: string;
  beds: number;
  baths: number;
  square_ft: number;
  occupancy_date: number;
}

interface Screening {
  id: string;
  user_email: string;
  buyer_experience: string;
  buyer_purpose: string;
  num_bedrooms: number[];
  num_bathrooms: number[];
  premiums: string[];
  budget: number[];
}

const Results = () => {
  const [units, setUnits] = useState<Unit[]>([]);
  const [screening, setScreening] = useState<Screening>();
  const history = useHistory();

  useEffect(() => {
    message.info({
      content: "Tip: Click on the filter icon to narrow your results",
      icon: <FilterOutlined />,
      duration: 5,
    });

    getUnits();
    getScreening();

    return () => {
      setUnits([]);
      setScreening(undefined);
    };
  }, []);

  const getUnits = async () => {
    try {
      const allUnits: any = await API.graphql(graphqlOperation(listUnits));
      setUnits(allUnits.data.listUnits.items);
    } catch (err) {
      message.error(
        "There was an error retrieving the units."
      );
      console.log(err);
    }
  };

  const getScreening = async () => {
    try {
      const {
        attributes: { email },
      }: { attributes: { email: string } } =
        await Auth.currentAuthenticatedUser();

      const filter: {
        user_email: {
          eq: string;
        };
      } = {
        user_email: {
          eq: email,
        },
      };

      const screenings: any = await API.graphql({
        query: listScreenings,
        variables: { filter: filter },
      });

      setScreening(screenings.data.listScreenings.items[0]);
    } catch (err) {
      message.error(
        "There was an error retrieving the screening data."
      );
      console.log(err);
    }
  };

  const getDefaultNumBedrooms = () => {
    const numBedrooms: string[] | undefined = screening?.num_bedrooms.map(
      (bedroom: number) => {
        switch (bedroom) {
          case BedroomsKind.BACHELOR:
            return BedroomsKind.BACHELOR.toString();
          case BedroomsKind.ONE_BED:
            return BedroomsKind.ONE_BED.toString();
          case BedroomsKind.ONE_BED_PLUS_DEN:
            return BedroomsKind.ONE_BED_PLUS_DEN.toString();
          case BedroomsKind.TWO_BED:
            return BedroomsKind.TWO_BED.toString();
          case BedroomsKind.TWO_BED_PLUS_DEN:
            return BedroomsKind.TWO_BED_PLUS_DEN.toString();
          default:
            return "";
        }
      }
    );

    return numBedrooms;
  };

  const getDefaultNumBathrooms = () => {
    const numBathrooms: string[] | undefined = screening?.num_bathrooms.map(
      (bathroom: number) => {
        switch (bathroom) {
          case BathroomsKind.ONE_BATH:
            return BathroomsKind.ONE_BATH.toString();
          case BathroomsKind.TWO_BATH:
            return BathroomsKind.TWO_BATH.toString();
          case BathroomsKind.THREE_BATH:
            return BathroomsKind.THREE_BATH.toString();
          default:
            return "";
        }
      }
    );

    return numBathrooms;
  };

  const getDefaultPrice = () => {
    const prices: string[] | undefined = screening
      ? [
          BudgetKind.ZERO,
          BudgetKind.ONE_MILLION,
          BudgetKind.TWO_MILLION,
          BudgetKind.THREE_MILLION,
          BudgetKind.FOUR_MILLION,
        ]
          .filter((price) => {
            return (
              price >= screening?.budget[0] && price < screening?.budget[1]
            );
          })
          .map((price) => {
            return price.toString();
          })
      : undefined;

    return prices;
  };

  return (
    <StyledDiv>
      <Typography>
        <StyledTitle level={2}>Property Finder</StyledTitle>
        <StyledSubtitle level={5} type="secondary">
          A list of our available properties
        </StyledSubtitle>
      </Typography>
      <Divider />
      {screening ? (
        <Table<Unit>
          style={{ cursor: "pointer" }}
          dataSource={units}
          pagination={{ pageSize: 25 }}
          scroll={{ y: 350 }}
          onRow={(record) => {
            return {
              onClick: () => history.push(`result/${record.id}`),
            };
          }}
        >
          <Column<Unit> title="Unit" dataIndex="unit_number" />
          <Column<Unit>
            title="SQFT"
            dataIndex="square_ft"
            filters={[
              {
                text: "0 - 1K",
                value: SqftKind.ZERO,
              },
              {
                text: "1K - 2K",
                value: SqftKind.ONE_THOUSAND,
              },
              {
                text: "2K - 3K",
                value: SqftKind.TWO_THOUSAND,
              },
              {
                text: "3K - 4K",
                value: SqftKind.THREE_THOUSAND,
              },
              {
                text: "4K - 5K",
                value: SqftKind.FOUR_THOUSAND,
              },
            ]}
            sorter={(a, b) => a.square_ft - b.square_ft}
            onFilter={(value, record) => {
              return (
                record.square_ft >= value &&
                record.square_ft < Number(value) + 1000
              );
            }}
          />
          <Column<Unit>
            title="Beds"
            dataIndex="beds"
            filters={[
              {
                text: "Bachelor",
                value: BedroomsKind.BACHELOR,
              },
              {
                text: "1",
                value: BedroomsKind.ONE_BED,
              },
              {
                text: "1 + Den",
                value: BedroomsKind.ONE_BED_PLUS_DEN,
              },
              {
                text: "2",
                value: BedroomsKind.TWO_BED,
              },
              {
                text: "2 + Den",
                value: BedroomsKind.TWO_BED_PLUS_DEN,
              },
            ]}
            defaultFilteredValue={getDefaultNumBedrooms()}
            onFilter={(value, record) => {
              return record.beds.toString().indexOf(value.toString()) === 0;
            }}
          />
          <Column<Unit>
            title="Baths"
            dataIndex="baths"
            filters={[
              {
                text: "1",
                value: BathroomsKind.ONE_BATH,
              },
              {
                text: "2",
                value: BathroomsKind.TWO_BATH,
              },
              {
                text: "3",
                value: BathroomsKind.THREE_BATH,
              },
            ]}
            sorter={(a, b) => a.baths - b.baths}
            defaultFilteredValue={getDefaultNumBathrooms()}
            onFilter={(value, record) => {
              return record.baths.toString().indexOf(value.toString()) === 0;
            }}
          />
          <Column<Unit>
            title="Price"
            dataIndex="price"
            filters={[
              {
                text: "$0 - $1M",
                value: BudgetKind.ZERO,
              },
              {
                text: "$1M - $2M",
                value: BudgetKind.ONE_MILLION,
              },
              {
                text: "$2M - $3M",
                value: BudgetKind.TWO_MILLION,
              },
              {
                text: "$3M - $4M",
                value: BudgetKind.THREE_MILLION,
              },
              {
                text: "$4M - $5M",
                value: BudgetKind.FOUR_MILLION,
              },
            ]}
            sorter={(a, b) =>
              parseInt(a.price.replace(/,/g, "")) -
              parseInt(b.price.replace(/,/g, ""))
            }
            defaultFilteredValue={screening && getDefaultPrice()}
            onFilter={(value, record) => {
              return (
                parseInt(record.price.replace(/,/g, "")) > value &&
                parseInt(record.price.replace(/,/g, "")) <
                  Number(value) + BudgetKind.ONE_MILLION
              );
            }}
          />
          <Column<Unit>
            title="Occupancy"
            dataIndex="occupancy_date"
            filters={[
              {
                text: "2022",
                value: OccupancyKind.TWO_THOUSAND_AND_TWENTY_TWO,
              },
              {
                text: "2023",
                value: OccupancyKind.TWO_THOUSAND_AND_TWENTY_THREE,
              },
              {
                text: "2024",
                value: OccupancyKind.TWO_THOUSAND_AND_TWENTY_FOUR,
              },
            ]}
            sorter={(a, b) => a.occupancy_date - b.occupancy_date}
            onFilter={(value, record) => {
              return (
                record.occupancy_date.toString().indexOf(value.toString()) === 0
              );
            }}
          />
        </Table>
      ) : (
        <StyledLoadingDiv>
          <Spin indicator={loadingIcon} size="large" />
        </StyledLoadingDiv>
      )}
    </StyledDiv>
  );
};

export default Results;
