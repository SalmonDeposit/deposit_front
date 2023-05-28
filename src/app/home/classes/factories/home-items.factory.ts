export interface HomeItems{
  icon: string;
  description:string;
}

export class HomeItemsFactory{
  public static buildSupportsItems(): HomeItems[]{
    return [
      {
        icon: "assets/img/home/coffre.png",
        description: "Stocker vos documents importants en sécurité et entièrement en France ! "
      },
      {
        icon: "assets/img/home/search.png",
        description: "Retrouver facilement et à tout moment vos documents"
      },
      {
        icon: "assets/img/home/time_saving.png",
        description: "Gagner du temps en automatisant la génération de vos documents"
      }
    ]
  }
  public static buildValuesItems(): HomeItems[]{
    return [
      {
        icon: "assets/img/services/security.jpg",
        description: "Confidentialité totale de vos documents personnels"
      },
      {
        icon: "assets/img/services/connect_home.png",
        description: "Accessibilité à tout moment, de n'importe où."
      },
      {
        icon: "assets/img/services/time_saving_home.png",
        description: "Simplification des démarches administratives."
      }
    ]
  }
}
