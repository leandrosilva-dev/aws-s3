import AWS from "@shared/AWS";

class ObjectService {
  aws: AWS;

  constructor() {
    this.aws = new AWS();
  }

  public async upload() {
    const uploadParams = {
      Bucket: this.aws.bucketName,
      Body: "Teste",
      Key: "Arquivo" + new Date() + ".txt",
    };

    const r = await this.aws.s3.upload(uploadParams).promise();
  }

  public async listObject() {
    const listParams = {
      Bucket: this.aws.bucketName,
    };

    let r: any;

    try {
      r = await this.aws.s3.listObjects(listParams).promise();
      //console.log(r.Contents);
      console.log("--------------------------------------------------------------");
    } catch (e) {
      console.error(e.code);
    }

    return r;
  }
}

export default ObjectService;
