interface ContentI {
  contentSubPrice3: string;
  contentSubPrice2: string;
  _key: string;
  contentSubName4: string;
  contentSubName3: string;
  contentSubName: string;
  contentSubName2: string;
  contentSubPrice: string;
  contentSubImage: {
    _type: "image";
    asset: {
      _type: "reference";
      _ref: string;
    };
  };
  contentSubPrice4: string;
}

interface Tab2Extra {
  title: string;
  desc: string;
  image: any;
  step: string;
}

interface Tab2 {
  slug: {
    current: string;
  };
  btnText1: string;
  title1: string;
  extraDetails: tab2Extra[];
}

export default interface TradeTab1 {
  subContentTitle2: string;
  contentTitle: string;
  slug: {
    current: string;
  };
  title: string;
  subContentTitle: string;
  icon: any;

  ContentName: ContentI[];
}
