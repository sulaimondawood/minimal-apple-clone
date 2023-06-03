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
