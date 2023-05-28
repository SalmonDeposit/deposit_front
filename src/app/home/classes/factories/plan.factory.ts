import {Plan} from "../plan";

export class PlanFactory{
  public static BasicDescription = "<p><b>10Go</b> de stockage</p>"
  public static StandardDescription = "<p><b>50Go</b> de stockage</p>"
  public static PremiumDescription = "<p><b>100Go</b> de stockage</p>"
  public static GetFreemium(): Plan {
    return {
      salmonCoinCost: 0,
      realCost: 0,
      description: "<p><b>1Go</b> de stockage</p>",
      longName: "",
      shortName: "Freemium"

    }
  }

}
