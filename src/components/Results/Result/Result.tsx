import { ArrowRightOutlined } from "@ant-design/icons";
import { S3ProviderListOutput } from "@aws-amplify/storage";
import {
  Card,
  Col,
  Divider,
  Image,
  message,
  Row,
  Spin,
  Statistic,
  Tabs,
  Typography
} from "antd";
import { API, Storage } from "aws-amplify";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { listUnits } from "../../../graphql/queries";
import { StyledResultBookButton } from "../../Styles/Button.style";
import {
  StyledDiv,
  StyledLoadingDiv,
  StyledResultBookDiv,
  StyledResultFeesDiv,
  StyledResultGalleryDiv
} from "../../Styles/Div.style";
import { StyledLoadingIcon } from "../../Styles/LoadingOutlined.style";
import { StyledResultParagraph } from "../../Styles/Paragraph.style";
import { StyledResultFeesRow } from "../../Styles/Row.style";
import { StyledTitle } from "../../Styles/Title.style";

const { TabPane } = Tabs;
const { PreviewGroup } = Image;

interface Unit {
  collection: string;
  unit_number: number;
  starting_floor: number;
  price: string;
  square_ft: number;
  beds: number;
  baths: number;
  occupancy_date: number;
}

interface UnitHeaders {
  unit_number: number;
  price: string;
  square_ft: number;
  beds: number;
  baths: number;
  occupancy_date: number;
}

const loadingIcon: JSX.Element = <StyledLoadingIcon spin />;

const Result = () => {
  const [unit, setUnit] = useState<Unit>();
  const [unitHeaders, setUnitHeaders] = useState<UnitHeaders>();
  const [renderingsImageLinks, setRenderingsImageLinks] = useState<string[]>([
    "",
  ]);
  const [viewsImageLinks, setViewsImageLinks] = useState<string[]>([""]);
  const [neighbourhoodImageLinks, setNeighbourhoodImageLinks] = useState<
    string[]
  >([""]);
  const [floorplanImageLinks, setFloorplanImageLinks] = useState<string[]>([
    "",
  ]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getUnit();
  }, []);

  useEffect(() => {
    getRenderingImages();
    getViewsImages();
    getNeighbourhoodImages();
    getFloorplanImages();
  }, [unit]);

  const getUnit = async () => {
    try {
      const filter: {
        id: {
          eq: string;
        };
      } = {
        id: {
          eq: id,
        },
      };

      const selectedUnit: any = await API.graphql({
        query: listUnits,
        variables: { filter: filter },
      });

      const {
        collection,
        unit_number,
        starting_floor,
        price,
        square_ft,
        beds,
        baths,
        occupancy_date,
      }: {
        collection: string;
        unit_number: number;
        starting_floor: number;
        price: string;
        square_ft: number;
        beds: number;
        baths: number;
        occupancy_date: number;
      } = selectedUnit.data.listUnits.items[0];

      const selectedUnitObj: Unit = {
        collection: collection,
        unit_number: unit_number,
        starting_floor: starting_floor,
        price: price,
        square_ft: square_ft,
        beds: beds,
        baths: baths,
        occupancy_date: occupancy_date,
      };

      setUnit(selectedUnitObj);

      const selectedUnitHeaders: UnitHeaders = {
        unit_number: unit_number,
        price: price,
        square_ft: square_ft,
        beds: beds,
        baths: baths,
        occupancy_date: occupancy_date,
      };

      setUnitHeaders(selectedUnitHeaders);
    } catch (err) {
      message.error("There was an error retrieving the unit.");
      console.log(err);
    }
  };

  const getRenderingImages = async () => {
    try {
      const renderingsImages: S3ProviderListOutput = await Storage.list(
        "renderings/"
      );
      const renderingsImagesKeys: (string | undefined)[] = renderingsImages
        .slice(1, renderingsImages.length)
        .map((image) => {
          return image.key;
        });

      const renderingsImageLinks: string[] = [""];

      for (const imageKey of renderingsImagesKeys) {
        if (imageKey) {
          const fileAccessURL: string = await Storage.get(imageKey);

          renderingsImageLinks.push(fileAccessURL);
        }
      }

      setRenderingsImageLinks(renderingsImageLinks);
    } catch (err) {
      message.error("There was an error retrieving the rendering images.");
      console.log(err);
    }
  };

  const getViewsImages = async () => {
    try {
      const viewsImages: S3ProviderListOutput = await Storage.list(
        `views/${unit?.starting_floor}/`
      );

      const viewsImagesKeys: (string | undefined)[] = viewsImages
        .slice(1, viewsImages.length)
        .map((image) => {
          return image.key;
        });

      const viewsImageLinks: string[] = [""];

      for (const imageKey of viewsImagesKeys) {
        if (imageKey) {
          const fileAccessURL: string = await Storage.get(imageKey);

          viewsImageLinks.push(fileAccessURL);
        }
      }

      setViewsImageLinks(viewsImageLinks);
    } catch (err) {
      message.error("There was an error retrieving the views images.");
      console.log(err);
    }
  };

  const getNeighbourhoodImages = async () => {
    try {
      const neighbourhoodImages: S3ProviderListOutput = await Storage.list(
        "neighbourhood/"
      );
      const neighbourhoodImagesKeys: (string | undefined)[] =
        neighbourhoodImages
          .slice(1, neighbourhoodImages.length)
          .map((image) => {
            return image.key;
          });

      const neighbourhoodImageLinks: string[] = [""];

      for (const imageKey of neighbourhoodImagesKeys) {
        if (imageKey) {
          const fileAccessURL: string = await Storage.get(imageKey);

          neighbourhoodImageLinks.push(fileAccessURL);
        }
      }

      setNeighbourhoodImageLinks(neighbourhoodImageLinks);
    } catch (err) {
      message.error("There was an error retrieving the neighbourhood images.");
      console.log(err);
    }
  };

  const getFloorplanImages = async () => {
    try {
      const floorplanImages: S3ProviderListOutput = await Storage.list(
        `floorplans/${getCollection()}/`
      );

      const floorplanImagesKeys: (string | undefined)[] = floorplanImages
        .slice(1, floorplanImages.length)
        .map((image) => {
          return image.key;
        });

      const floorplanImageLinks: string[] = [""];

      for (const imageKey of floorplanImagesKeys) {
        if (imageKey) {
          const fileAccessURL: string = await Storage.get(imageKey);

          floorplanImageLinks.push(fileAccessURL);
        }
      }

      setFloorplanImageLinks(floorplanImageLinks);
    } catch (err) {
      message.error("There was an error retrieving the floorplan images.");
      console.log(err);
    }
  };

  const getCollection = () => {
    const collection =
      unit?.starting_floor &&
      unit?.starting_floor >= 9 &&
      unit?.starting_floor <= 23
        ? "Cielo"
        : "Stratus";

    return collection;
  };

  const imagePaneData = [
    {
      tabName: "Renderings",
      images: renderingsImageLinks,
      index: "2",
    },
    {
      tabName: "Views",
      images: viewsImageLinks,
      index: "3",
    },
    {
      tabName: "Neighbourhood",
      images: neighbourhoodImageLinks,
      index: "4",
    },
    {
      tabName: "Floorplan",
      images: floorplanImageLinks,
      index: "5",
    },
  ];

  const getHeaderName = (key: string) => {
    if (key === "unit_number") {
      return "Unit";
    } else if (key === "price") {
      return "Price";
    } else if (key === "square_ft") {
      return "Square Foot";
    } else if (key === "beds") {
      return "Beds";
    } else if (key === "baths") {
      return "Baths";
    } else if (key === "occupancy_date") {
      return "Occupancy Date";
    }

    return null;
  };

  const getHeaderValue = (key: string) => {
    if (unitHeaders) {
      if (key === "price") {
        return `$${unitHeaders["price"]}`;
      } else {
        return unitHeaders[key as keyof UnitHeaders];
      }
    }

    return null;
  };

  return (
    <StyledDiv>
      {unit && unitHeaders ? (
        <>
          <Typography>
            <StyledTitle level={2}>{getCollection()} Collection</StyledTitle>
            <br />
            <Row>
              {Object.keys(unitHeaders).map((key: string) => (
                <Col span={4}>
                  <StyledResultParagraph type="secondary">
                    {getHeaderName(key)}
                  </StyledResultParagraph>
                  <StyledResultParagraph type="secondary">
                    {getHeaderValue(key)}
                  </StyledResultParagraph>
                </Col>
              ))}
            </Row>
          </Typography>
          <Divider />
          <StyledResultBookDiv>
            <StyledResultBookButton type="primary" size="large">
              <Link
                to={{
                  pathname: "/booking",
                  state: { id: id, total: unit?.price },
                }}
              >
                Book Now <ArrowRightOutlined />
              </Link>
            </StyledResultBookButton>
          </StyledResultBookDiv>
          <br />
          <Tabs tabPosition="left">
            <TabPane tab="Costs" key="1">
              <StyledResultFeesDiv>
                <StyledResultFeesRow gutter={16}>
                  <Col span={12}>
                    <Card>
                      <Statistic
                        title="Estimated Mortage"
                        value={500000}
                        prefix="$"
                      />
                      <Divider />
                      <Typography>
                        {" "}
                        20% down payment <br /> 25 year amortization <br />{" "}
                        1.75% interest
                      </Typography>
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card>
                      <Statistic
                        title="Maintenance Fees"
                        value={1000}
                        prefix="$"
                      />
                      <Divider />
                      <Typography>
                        {" "}
                        Min: $0.30/ft <br /> Avg: $0.40/ft <br /> Max: $0.50/ft{" "}
                      </Typography>
                    </Card>
                  </Col>
                </StyledResultFeesRow>
                <Row gutter={16}>
                  <Col span={12}>
                    <Card>
                      <Statistic title="Utility Fees" value={500} prefix="$" />
                      <Divider />
                      <Typography>
                        {" "}
                        Electricity: $200 <br /> Water: $200 <br /> Internet:
                        $100{" "}
                      </Typography>
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card>
                      <Statistic title="Taxes" value={750} prefix="$" />
                      <Divider />
                      <Typography>
                        {" "}
                        GST: $300 <br /> HST: $200 <br /> PST: $250{" "}
                      </Typography>
                    </Card>
                  </Col>
                </Row>
              </StyledResultFeesDiv>
            </TabPane>
            {imagePaneData.map((pane, index) => {
              return (
                <TabPane
                  tab={imagePaneData[index].tabName}
                  key={imagePaneData[index].index}
                >
                  <StyledResultGalleryDiv>
                    <PreviewGroup>
                      {imagePaneData[index].images.map(
                        (image: string, idx: number) => {
                          return (
                            <div>
                              <Image key={idx} src={image} />
                            </div>
                          );
                        }
                      )}
                    </PreviewGroup>
                  </StyledResultGalleryDiv>
                </TabPane>
              );
            })}
          </Tabs>
        </>
      ) : (
        <StyledLoadingDiv>
          <Spin indicator={loadingIcon} size="large" />
        </StyledLoadingDiv>
      )}
    </StyledDiv>
  );
};

export default Result;
