import {
  LoadingOutlined,
  PlusOutlined,
  RightOutlined
} from "@ant-design/icons";
import { S3ProviderPutOutput } from "@aws-amplify/storage";
import { Button, message, Space, Typography } from "antd";
import { UploadChangeParam } from "antd/lib/upload";
import { UploadFile } from "antd/lib/upload/interface";
import { Auth, Storage } from "aws-amplify";
import { useContext, useEffect, useState } from "react";
import { BookingStatusContext } from "../../../utils/BookingState";
import {
  StyledButtonNavDiv,
  StyledContentDiv,
  StyledIdentificationDiv,
  StyledIdentificationUploadDiv
} from "../../Styles/Div.style";
import { StyledIdentificationUploadImage } from "../../Styles/Image.style";
import { StyledPrompt } from "../../Styles/Title.style";
import { StyledIdentificationUploader } from "../../Styles/Upload.style";

const Identification = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const { currentStep, setCurrentStep } = useContext(BookingStatusContext);

  useEffect(() => {
    getImageUrl();
  }, []);

  const getImageUrl = async () => {
    const userInfo = await Auth.currentUserInfo();

    if (userInfo.attributes.hasOwnProperty("picture")) {
      const fileAccessURL: string = await Storage.get(
        `identifications/${userInfo.username}`
      );

      setImageUrl(fileAccessURL);
    }
  };

  const getBase64 = (
    img: Blob,
    callback: {
      (imageUrl: any): void;
      (arg0: string | ArrayBuffer | null): any;
    }
  ) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file: { type: string; size: number }) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

    if (!isJpgOrPng) {
      message.error("Please upload a JPG/PNG file");
    }

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
      message.error("Image must smaller than 2MB");
    }

    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info: UploadChangeParam<UploadFile<any>>) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done" && info.file.originFileObj) {
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImageUrl(imageUrl);
        setLoading(false);
      });
    }
  };

  const performUpload = async (options: any) => {
    try {
      const { onSuccess, file } = options;

      const user = await Auth.currentAuthenticatedUser();

      const result: S3ProviderPutOutput = await Storage.put(
        `identifications/${user.attributes.sub}`,
        file
      );

      await Auth.updateUserAttributes(user, {
        picture: result.key,
      });

      setTimeout(() => {
        onSuccess("ok");
      }, 0);
    } catch (err) {
      message.error(
        "There was an error uploading your photo. Please try again."
      );
      console.log(err);
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <StyledIdentificationUploadDiv>Upload</StyledIdentificationUploadDiv>
    </div>
  );

  return (
    <StyledIdentificationDiv>
      <Typography>
        <StyledPrompt level={5}>
          Please upload a photo of your drivers license
        </StyledPrompt>
      </Typography>
      <StyledContentDiv>
        <StyledIdentificationUploader
          listType="picture-card"
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={(info) => handleChange(info)}
          customRequest={(options) => performUpload(options)}
        >
          {imageUrl ? (
            <StyledIdentificationUploadImage src={imageUrl} alt="license" />
          ) : (
            uploadButton
          )}
        </StyledIdentificationUploader>
      </StyledContentDiv>
      <br />
      <br />
      <StyledButtonNavDiv>
        <Space>
          <Button
            type="primary"
            shape="circle"
            size="large"
            icon={<RightOutlined />}
            onClick={() => {
              setCurrentStep(currentStep + 1);
            }}
            disabled={imageUrl !== "" ? false : true}
          />
        </Space>
      </StyledButtonNavDiv>
    </StyledIdentificationDiv>
  );
};

export default Identification;
