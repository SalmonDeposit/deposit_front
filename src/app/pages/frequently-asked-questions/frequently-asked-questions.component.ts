import { Component, OnInit } from '@angular/core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import {IconProp} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-frequently-asked-questions',
  templateUrl: './frequently-asked-questions.component.html',
  styleUrls: ['./frequently-asked-questions.component.scss']
})
export class FrequentlyAskedQuestionsComponent{
  currentCategory: string = ' generals';
  categories: string[] = ['Questions générales', 'Question à propos de mon compte', 'Question sécurité & confidentialités'];
faq= [
  { 
    category : " Qestions : génerales ",
    questions : [ 
      { 
        question : "qu'est ce que Depos'it", 
        answer : " Depos’it est un coffre-fort numérique assure le stockage de toutes les données en sécurité et maintient l’intégrité des documents stockés. L’utilisateur aura toujours accès à tous ses documents n’importe où, n’importe quand à travers une meilleure organisation pour lui avec le classement automatisé de tous ses documents administratifs. Nos données sont stockées en France. "
      },
      {
        question : "Qui peut souscrire à Depos’it ?  ",
        answer: "L’inscription à Depos’it est accessible à tous les particuliers. Il n’y a aucune restriction à l’inscription à notre application. "
      },
      {
        question : "  Qu’est-ce qu’un coffre-fort numérique ? ",
        answer : " Un coffre-fort numérique est un espace de stockage sécurisé sur un serveur distant où l'utilisateur peut stocker des documents et des données sensibles, etc. Le coffre-fort numérique utilise des méthodes de chiffrage avancées pour garantir la confidentialité et la sécurité des informations stockées. Le propriétaire du coffre-fort numérique peut y accéder à tout moment, depuis n'importe quel appareil connecté à Internet. "
      },
      {
        question : "Le service Depos’it est-il gratuit ? ", 
        answer: "Toute création de coffre Depos’it est gratuite. Le téléchargement de l'application mobile l'est également. Depos’it vous permet toutefois de choisir entre l'offre FREEMIUM 1Go qui est entièrement gratuite, et trois offres payantes :  Basic è 10 Go / 3,99€. Standard è 50Go/ 15,99€. Premium è 100Go/ 30,99€. Ces trois offres restent sans engagement. NB : Ces offres sont limitées à une période mensuelle spécifique, vous pouvez en bénéficier à tout le long du moins tant que vous n'avez pas consommé tous les avantages inclus."
        
      },
      {
        question : "Comment obtenir de l’aide du service client ? ", 
        answer : "Depos’it met à votre disposition l'aide en ligne 24h/24 et 7 jours sur 7 pour vous permettre d'accéder aux réponses apportées par notre Service Clients aux questions les plus fréquentes. Vous pouvez contacter le Service Clients depuis notre formulaire de contact.  Nos conseillers vous apporteront une réponse adaptée et personnalisée à votre demande dans les plus brefs délais. Un chatbot vous répond également 24h/24 et 7j/7 pour les questions simples et récurrentes. Il est à votre disposition pour vous apporter une assistance utile mais non intrusive, en proposant une solution rapide en autonomie. "
      }, 
      {
        question: "Sur quel appareils et version d’OS est disponible l’application Depos’it ?  ", 
        answer: "L'application mobile Depos’it est disponible sur les smartphones iOS et Android.  Versions minimum des OS pour l’application mobile :  iOS : Restez à l’affût !  Android : …….  "
      }
    ]
  },
  {
    category : "Questions : à propos de mon compte",
    questions : [
      {
        question : "Comment m’inscrire ?  ", 
        answer : "Vous pouvez vous inscrire sur Depos’it en suivant les étapes ci-dessous : Accédez au formulaire d'inscription en cliquant sur m’inscrire puis : Renseignez votre adresse email Définissez un mot de passe Cliquez sur m’inscrire. Ou si vous avez un compte google, tout simplement vous cliquez sur Sign in with google."

      }, 
      {
        question : "Comment charger un document ?  ", 
        answer : "Une fois connecter, vous serez rédigé automatiquement vers votre page d’accueil.  En bas à droite il y a un bouton « charger un document »  Lorsque vous cliquez sur le bouton <<charger un document>>, l'application ouvre une interface qui vous permet de naviguer et de sélectionner les fichiers que vous souhaitez charger depuis votre appareil. Une fois que vous avez sélectionné le fichier que vous souhaitez charger, vous cliquez sur le bouton « charger », l'application récupère ce fichier et l'ajoute à votre compte utilisateur. Ensuite, vous pouvez visualiser et gérer ce fichier à partir de votre compte Depos’it.   "
      }
    ]
  },
  {
    category : "Questions : sécurité & confidentialités",
    questions : [
      {
        question : "Comment Depos’it garanti la protection de mes données ?  ", 
        answer : "Les données collectées sont intégrées à notre base de données, dont nous avons la gestion exclusive. Les serveurs de Depos'it sont hébergés en France et nous suivons scrupuleusement toutes les recommandations de la CNIL ainsi que les normes en vigueur relatives au coffre-fort numérique, à la protection des données. Nous garantissons également la non-commercialisation des données utilisateurs et assurons un niveau de sécurité très exigeant.  De plus, Depos'it est en conformité avec la réglementation RGPD." 

      }, 
      { 
        question : "Qui a accès au contenu de mon coffre-fort numérique ?  ", 
        answer : "Vous seul avez accès à votre compte. Depos’it n'a pas accès à vos documents et ne peut pas visualiser le contenu de votre coffre-fort numérique. "
      },
      {
        question : "Y a-t-il un risque que je perde mes documents archivés dans Depos’it ? ", 
        answer : "Nous avons pris des mesures pour garantir une sauvegarde extrêmement sécurisée de tous vos documents. Des sauvegardes régulières sont effectuées pour prévenir tout risque de destruction en cas d'incident. "
      }
    ]
  }
]

  constructor() { }
  
 

  caretRight = faCaretRight as IconProp;
}