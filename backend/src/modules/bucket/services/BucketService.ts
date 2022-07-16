import AWS from "@shared/AWS";

class BucketService {
  aws: AWS;

  constructor() {
    this.aws = new AWS();
  }

  public async listBucket() {
    let r = await this.aws.s3.listBuckets().promise();

    console.log(r);

    return r;
  }
}

export default BucketService;
