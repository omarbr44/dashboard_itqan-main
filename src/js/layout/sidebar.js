class Sidebar extends HTMLElement {
  constructor() {
    super();
    this.img = this.getAttribute('img') || "../../../src/images/logo.png"; // Default image
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const currentPage = window.location.pathname.split('/').splice(6).join('/'); // Get current path (for active links)
    console.log(currentPage)
    const menu = [
      {
        title: "الصفحة الرئيسية",
        href: "/",
        active: currentPage === "/",
        icon: `
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 10.75H17C14.58 10.75 13.25 9.42 13.25 7V5C13.25 2.58 14.58 1.25 17 1.25H19C21.42 1.25 22.75 2.58 22.75 5V7C22.75 9.42 21.42 10.75 19 10.75ZM17 2.75C15.42 2.75 14.75 3.42 14.75 5V7C14.75 8.58 15.42 9.25 17 9.25H19C20.58 9.25 21.25 8.58 21.25 7V5C21.25 3.42 20.58 2.75 19 2.75H17Z"
              fill="black"
            />
            <path
              d="M7 22.75H5C2.58 22.75 1.25 21.42 1.25 19V17C1.25 14.58 2.58 13.25 5 13.25H7C9.42 13.25 10.75 14.58 10.75 17V19C10.75 21.42 9.42 22.75 7 22.75ZM5 14.75C3.42 14.75 2.75 15.42 2.75 17V19C2.75 20.58 3.42 21.25 5 21.25H7C8.58 21.25 9.25 20.58 9.25 19V17C9.25 15.42 8.58 14.75 7 14.75H5Z"
              fill="black"
            />
            <path
              d="M6 10.75C3.38 10.75 1.25 8.62 1.25 6C1.25 3.38 3.38 1.25 6 1.25C8.62 1.25 10.75 3.38 10.75 6C10.75 8.62 8.62 10.75 6 10.75ZM6 2.75C4.21 2.75 2.75 4.21 2.75 6C2.75 7.79 4.21 9.25 6 9.25C7.79 9.25 9.25 7.79 9.25 6C9.25 4.21 7.79 2.75 6 2.75Z"
              fill="black"
            />
            <path
              d="M18 22.75C15.38 22.75 13.25 20.62 13.25 18C13.25 15.38 15.38 13.25 18 13.25C20.62 13.25 22.75 15.38 22.75 18C22.75 20.62 20.62 22.75 18 22.75ZM18 14.75C16.21 14.75 14.75 16.21 14.75 18C14.75 19.79 16.21 21.25 18 21.25C19.79 21.25 21.25 19.79 21.25 18C21.25 16.21 19.79 14.75 18 14.75Z"
              fill="black"
            />
          </svg>
        `,
      },
      {
        title: "خدمات إتقان",
        href: "../../../pages/settings/general-settings.html",
        active: currentPage === "pages/settings/general-settings.html",
        icon: `
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1207 12.7805C12.0507 12.7705 11.9607 12.7705 11.8807 12.7805C10.1207 12.7205 8.7207 11.2805 8.7207 9.51047C8.7207 7.70047 10.1807 6.23047 12.0007 6.23047C13.8107 6.23047 15.2807 7.70047 15.2807 9.51047C15.2707 11.2805 13.8807 12.7205 12.1207 12.7805Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.7398 19.3805C16.9598 21.0105 14.5998 22.0005 11.9998 22.0005C9.39977 22.0005 7.03977 21.0105 5.25977 19.3805C5.35977 18.4405 5.95977 17.5205 7.02977 16.8005C9.76977 14.9805 14.2498 14.9805 16.9698 16.8005C18.0398 17.5205 18.6398 18.4405 18.7398 19.3805Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        `,
      },
      {
        title: "نظام إتقان المحاسبي",
        href: "../../../pages/accounting-system/index.html",
        active: currentPage === "pages/accounting-system/index.html",
        icon: `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.2016 16.9274L4.20167 16.9272C3.45775 16.6446 2.8821 16.1743 2.50092 15.5046C2.12562 14.8453 1.9592 14.029 1.9592 13.0798V7.92975C1.9592 6.62685 2.27424 5.5626 3.00814 4.82871C3.74205 4.09482 4.8063 3.77979 6.10919 3.77979H14.8992C15.9846 3.77979 16.9019 3.99605 17.6047 4.4944C18.3181 5.00027 18.7495 5.75335 18.9392 6.70013C18.9393 6.70065 18.9394 6.70117 18.9395 6.70169L18.4492 6.79974C18.5192 7.13974 18.5492 7.50975 18.5492 7.92975V13.0798C18.5492 15.5398 17.3592 16.7297 14.8992 16.7297H6.10919C5.69919 16.7297 5.32922 16.6897 4.94922 16.6097L4.2016 16.9274ZM4.2016 16.9274L4.21404 16.9317C4.43317 17.0084 4.64749 17.0656 4.85636 17.1011L4.2016 16.9274ZM4.76001 17.5822L4.73713 17.577L4.71387 17.574C4.53719 17.5509 4.29749 17.485 4.02654 17.3822L4.02516 17.3817C3.42513 17.1561 2.78932 16.7731 2.3019 16.1167C1.8171 15.4638 1.44922 14.5004 1.44922 13.0598V7.90973C1.44922 6.36955 1.89025 5.22331 2.65152 4.46205C3.41279 3.70079 4.55903 3.25977 6.09921 3.25977H14.8892C16.1916 3.25977 17.2137 3.5709 17.9565 4.12145C18.6938 4.66789 19.1998 5.48237 19.4189 6.5778L19.4194 6.57993C19.5011 6.97976 19.5392 7.41514 19.5392 7.90973V13.0598C19.5392 14.6114 19.0999 15.7597 18.3404 16.5202C17.5811 17.2806 16.4355 17.7197 14.8892 17.7197H6.09921C5.61018 17.7197 5.15797 17.6726 4.76001 17.5822Z" fill="white" stroke="black"/>
<path d="M17.8911 21.2203H9.10107C8.25107 21.2203 7.49106 21.1003 6.84106 20.8503C5.37106 20.3003 4.41105 19.1403 4.08105 17.4803C4.03105 17.2303 4.11107 16.9703 4.29107 16.8003C4.47107 16.6203 4.73107 16.5503 4.98107 16.6103C5.31107 16.6803 5.68107 16.7203 6.10107 16.7203H14.8911C17.3511 16.7203 18.5411 15.5304 18.5411 13.0704V7.92033C18.5411 7.50033 18.5111 7.13033 18.4411 6.79033C18.3911 6.54033 18.4711 6.29033 18.6411 6.11033C18.8211 5.93033 19.0711 5.85032 19.3211 5.91032C21.7211 6.40032 23.0411 8.18033 23.0411 10.9203V16.0704C23.0411 19.3504 21.1711 21.2203 17.8911 21.2203ZM5.92107 18.2203C6.24107 18.8003 6.72107 19.2104 7.38107 19.4504C7.86107 19.6304 8.44105 19.7203 9.11105 19.7203H17.9011C20.3611 19.7203 21.551 18.5304 21.551 16.0704V10.9203C21.551 9.34033 21.061 8.29034 20.051 7.74034C20.051 7.80034 20.051 7.86033 20.051 7.92033V13.0704C20.051 16.3404 18.1711 18.2203 14.9011 18.2203H6.11105C6.04105 18.2203 5.98107 18.2203 5.92107 18.2203Z" fill="black"/>
<path d="M10.4994 13.8894C8.62939 13.8894 7.10938 12.3694 7.10938 10.4994C7.10938 8.62939 8.62939 7.10938 10.4994 7.10938C12.3694 7.10938 13.8894 8.62939 13.8894 10.4994C13.8894 12.3694 12.3694 13.8894 10.4994 13.8894ZM10.4994 8.60938C9.45939 8.60938 8.60938 9.45939 8.60938 10.4994C8.60938 11.5394 9.45939 12.3894 10.4994 12.3894C11.5394 12.3894 12.3894 11.5394 12.3894 10.4994C12.3894 9.45939 11.5394 8.60938 10.4994 8.60938Z" fill="black"/>
<path d="M4.78125 13.4508C4.37125 13.4508 4.03125 13.1108 4.03125 12.7008V8.30078C4.03125 7.89078 4.37125 7.55078 4.78125 7.55078C5.19125 7.55078 5.53125 7.89078 5.53125 8.30078V12.7008C5.53125 13.1108 5.20125 13.4508 4.78125 13.4508Z" fill="black"/>
<path d="M16.2109 13.4508C15.8009 13.4508 15.4609 13.1108 15.4609 12.7008V8.30078C15.4609 7.89078 15.8009 7.55078 16.2109 7.55078C16.6209 7.55078 16.9609 7.89078 16.9609 8.30078V12.7008C16.9609 13.1108 16.6309 13.4508 16.2109 13.4508Z" fill="black"/>
</svg>

        `,
      },
      {
        title: "نظام الموارد البشرية",
        href: "../../../pages/human-resources/index.html",
        active: currentPage === "pages/human-resources/index.html",
        icon: `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.84102 10.6197L8.89123 10.6215L8.93505 10.6142C8.93668 10.614 8.93935 10.6138 8.94317 10.6136C8.95464 10.613 8.97114 10.6125 8.99234 10.6125C9.03488 10.6125 9.08706 10.6144 9.14024 10.6185L9.17086 10.6209L9.20153 10.6195C11.4301 10.5171 13.1773 8.6862 13.1886 6.44253V6.44C13.1886 4.13386 11.3047 2.25 8.99859 2.25C6.69245 2.25 4.80859 4.13386 4.80859 6.44C4.80859 8.70956 6.58214 10.5402 8.84102 10.6197ZM9.15859 11.12H9.15842H9.15824H9.15807H9.15789H9.15772H9.15754H9.15737H9.15719H9.15702H9.15685H9.15667H9.1565H9.15633H9.15615H9.15598H9.15581H9.15564H9.15547H9.15529H9.15512H9.15495H9.15478H9.15461H9.15444H9.15427H9.1541H9.15393H9.15376H9.15359H9.15342H9.15325H9.15308H9.15291H9.15274H9.15258H9.15241H9.15224H9.15207H9.1519H9.15174H9.15157H9.1514H9.15123H9.15107H9.1509H9.15074H9.15057H9.1504H9.15024H9.15007H9.14991H9.14974H9.14958H9.14941H9.14925H9.14908H9.14892H9.14875H9.14859H9.14843H9.14826H9.1481H9.14794H9.14777H9.14761H9.14745H9.14728H9.14712H9.14696H9.1468H9.14664H9.14647H9.14631H9.14615H9.14599H9.14583H9.14567H9.14551H9.14535H9.14519H9.14503H9.14487H9.14471H9.14455H9.14439H9.14423H9.14407H9.14391H9.14375H9.14359H9.14343H9.14327H9.14312H9.14296H9.1428H9.14264H9.14248H9.14233H9.14217H9.14201H9.14185H9.1417H9.14154H9.14138H9.14123H9.14107H9.14091H9.14076H9.1406H9.14044H9.14029H9.14013H9.13998H9.13982H9.13967H9.13951H9.13936H9.1392H9.13905H9.13889H9.13874H9.13858H9.13843H9.13827H9.13812H9.13796H9.13781H9.13766H9.1375H9.13735H9.1372H9.13704H9.13689H9.13674H9.13658H9.13643H9.13628H9.13612H9.13597H9.13582H9.13567H9.13551H9.13536H9.13521H9.13506H9.13491H9.13475H9.1346H9.13445H9.1343H9.13415H9.134H9.13384H9.13369H9.13354H9.13339H9.13324H9.13309H9.13294H9.13279H9.13264H9.13249H9.13234H9.13219H9.13204H9.13189H9.13174H9.13159H9.13144H9.13129H9.13114H9.13099H9.13084H9.13069H9.13054H9.13039H9.13024H9.13009H9.12994H9.12979H9.12964H9.12949H9.12934H9.1292H9.12905H9.1289H9.12875H9.1286H9.12845H9.1283H9.12816H9.12801H9.12786H9.12771H9.12756H9.12741H9.12727H9.12712H9.12697H9.12682H9.12668H9.12653H9.12638H9.12623H9.12608H9.12594H9.12579H9.12564H9.12549H9.12535H9.1252H9.12505H9.1249H9.12476H9.12461H9.12446H9.12432H9.12417H9.12402H9.12387H9.12373H9.12358H9.12343H9.12329H9.12314H9.12299H9.12285H9.1227H9.12255H9.12241H9.12226H9.12211H9.12196H9.12182H9.12167H9.12152H9.12138H9.12123H9.12108H9.12094H9.12079H9.12065H9.1205H9.12035H9.12021H9.12006H9.11991H9.11977H9.11962H9.11947H9.11933H9.11918H9.11903H9.11889H9.11874H9.11859H9.11845H9.1183H9.11815H9.11801H9.11786H9.11771H9.11757H9.11742H9.11728H9.11713H9.11698H9.11684H9.11669H9.11654H9.11652C9.03519 11.1098 8.95101 11.1106 8.87445 11.1189C6.26123 11.0178 4.30859 8.96409 4.30859 6.44C4.30859 3.85614 6.41474 1.75 8.99859 1.75C11.5821 1.75 13.6881 3.85562 13.6886 6.43903C13.6791 8.97998 11.6942 11.0348 9.18034 11.12H9.18033H9.18027H9.18021H9.18016H9.1801H9.18004H9.17998H9.17992H9.17986H9.1798H9.17975H9.17969H9.17963H9.17957H9.17951H9.17945H9.17939H9.17934H9.17928H9.17922H9.17916H9.1791H9.17904H9.17898H9.17893H9.17887H9.17881H9.17875H9.17869H9.17863H9.17857H9.17852H9.17846H9.1784H9.17834H9.17828H9.17822H9.17816H9.17811H9.17805H9.17799H9.17793H9.17787H9.17781H9.17775H9.17769H9.17764H9.17758H9.17752H9.17746H9.1774H9.17734H9.17728H9.17723H9.17717H9.17711H9.17705H9.17699H9.17693H9.17687H9.17682H9.17676H9.1767H9.17664H9.17658H9.17652H9.17646H9.17641H9.17635H9.17629H9.17623H9.17617H9.17611H9.17605H9.176H9.17594H9.17588H9.17582H9.17576H9.1757H9.17564H9.17559H9.17553H9.17547H9.17541H9.17535H9.17529H9.17523H9.17518H9.17512H9.17506H9.175H9.17494H9.17488H9.17482H9.17477H9.17471H9.17465H9.17459H9.17453H9.17447H9.17441H9.17436H9.1743H9.17424H9.17418H9.17412H9.17406H9.174H9.17394H9.17389H9.17383H9.17377H9.17371H9.17365H9.17359H9.17353H9.17348H9.17342H9.17336H9.1733H9.17324H9.17318H9.17312H9.17307H9.17301H9.17295H9.17289H9.17283H9.17277H9.17271H9.17266H9.1726H9.17254H9.17248H9.17242H9.17236H9.1723H9.17225H9.17219H9.17213H9.17207H9.17201H9.17195H9.17189H9.17184H9.17178H9.17172H9.17166H9.1716H9.17154H9.17148H9.17143H9.17137H9.17131H9.17125H9.17119H9.17113H9.17107H9.17102H9.17096H9.1709H9.17084H9.17078H9.17072H9.17066H9.17061H9.17055H9.17049H9.17043H9.17037H9.17031H9.17025H9.1702H9.17014H9.17008H9.17002H9.16996H9.1699H9.16984H9.16979H9.16973H9.16967H9.16961H9.16955H9.16949H9.16943H9.16937H9.16932H9.16926H9.1692H9.16914H9.16908H9.16902H9.16896H9.16891H9.16885H9.16879H9.16873H9.16867H9.16861H9.16855H9.1685H9.16844H9.16838H9.16832H9.16826H9.1682H9.16814H9.16809H9.16803H9.16797H9.16791H9.16785H9.16779H9.16773H9.16768H9.16762H9.16756H9.1675H9.16744H9.16738H9.16732H9.16727H9.16721H9.16715H9.16709H9.16703H9.16697H9.16691H9.16686H9.1668H9.16674H9.16668H9.16662H9.16656H9.1665H9.16645H9.16639H9.16633H9.16627H9.16621H9.16615H9.16609H9.16604H9.16598H9.16592H9.16586H9.1658H9.16574H9.16568H9.16563H9.16557H9.16551H9.16545H9.16539H9.16533H9.16527H9.16522H9.16516H9.1651H9.16504H9.16498H9.16492H9.16486H9.1648H9.16475H9.16469H9.16463H9.16457H9.16451H9.16445H9.16439H9.16434H9.16428H9.16422H9.16416H9.1641H9.16404H9.16398H9.16393H9.16387H9.16381H9.16375H9.16369H9.16363H9.16357H9.16352H9.16346H9.1634H9.16334H9.16328H9.16322H9.16316H9.16311H9.16305H9.16299H9.16293H9.16287H9.16281H9.16275H9.1627H9.16264H9.16258H9.16252H9.16246H9.1624H9.16234H9.16229H9.16223H9.16217H9.16211H9.16205H9.16199H9.16193H9.16187H9.16182H9.16176H9.1617H9.16164H9.16158H9.16152H9.16146H9.16141H9.16135H9.16129H9.16123H9.16117H9.16111H9.16105H9.161H9.16094H9.16088H9.16082H9.16076H9.1607H9.16064H9.16059H9.16053H9.16047H9.16041H9.16035H9.16029H9.16023H9.16018H9.16012H9.16006H9.16H9.15994H9.15988H9.15982H9.15977H9.15971H9.15965H9.15959H9.15953H9.15947H9.15941H9.15936H9.1593H9.15924H9.15918H9.15912H9.15906H9.159H9.15895H9.15889H9.15883H9.15877H9.15871H9.15865H9.15859Z" fill="black" stroke="black"/>
<path d="M16.5384 11.75C16.5084 11.75 16.4784 11.75 16.4484 11.74C16.0384 11.78 15.6184 11.49 15.5784 11.08C15.5384 10.67 15.7884 10.3 16.1984 10.25C16.3184 10.24 16.4484 10.24 16.5584 10.24C18.0184 10.16 19.1584 8.96 19.1584 7.49C19.1584 5.97 17.9284 4.74 16.4084 4.74C15.9984 4.75 15.6584 4.41 15.6584 4C15.6584 3.59 15.9984 3.25 16.4084 3.25C18.7484 3.25 20.6584 5.16 20.6584 7.5C20.6584 9.8 18.8584 11.66 16.5684 11.75C16.5584 11.75 16.5484 11.75 16.5384 11.75Z" fill="black"/>
<path d="M9.17156 22.55C7.21156 22.55 5.24156 22.05 3.75156 21.05C2.36156 20.13 1.60156 18.87 1.60156 17.5C1.60156 16.13 2.36156 14.86 3.75156 13.93C6.75156 11.94 11.6116 11.94 14.5916 13.93C15.9716 14.85 16.7416 16.11 16.7416 17.48C16.7416 18.85 15.9816 20.12 14.5916 21.05C13.0916 22.05 11.1316 22.55 9.17156 22.55ZM4.58156 15.19C3.62156 15.83 3.10156 16.65 3.10156 17.51C3.10156 18.36 3.63156 19.18 4.58156 19.81C7.07156 21.48 11.2716 21.48 13.7616 19.81C14.7216 19.17 15.2416 18.35 15.2416 17.49C15.2416 16.64 14.7116 15.82 13.7616 15.19C11.2716 13.53 7.07156 13.53 4.58156 15.19Z" fill="black"/>
<path d="M18.3382 20.75C17.9882 20.75 17.6782 20.51 17.6082 20.15C17.5282 19.74 17.7882 19.35 18.1882 19.26C18.8182 19.13 19.3982 18.88 19.8482 18.53C20.4182 18.1 20.7282 17.56 20.7282 16.99C20.7282 16.42 20.4182 15.88 19.8582 15.46C19.4182 15.12 18.8682 14.88 18.2182 14.73C17.8182 14.64 17.5582 14.24 17.6482 13.83C17.7382 13.43 18.1382 13.17 18.5482 13.26C19.4082 13.45 20.1582 13.79 20.7682 14.26C21.6982 14.96 22.2282 15.95 22.2282 16.99C22.2282 18.03 21.6882 19.02 20.7582 19.73C20.1382 20.21 19.3582 20.56 18.4982 20.73C18.4382 20.75 18.3882 20.75 18.3382 20.75Z" fill="black"/>
</svg>

        `,
      },
      {
        title: "الإعدادات العامة",
        href: "../../../pages/other-settings/index.html",
        active: currentPage === "pages/other-settings/index.html",
        icon: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15.25C10.2061 15.25 8.75 13.7939 8.75 12C8.75 10.2061 10.2061 8.75 12 8.75C13.7939 8.75 15.25 10.2061 15.25 12C15.25 13.7939 13.7939 15.25 12 15.25ZM12 9.25C10.4839 9.25 9.25 10.4839 9.25 12C9.25 13.5161 10.4839 14.75 12 14.75C13.5161 14.75 14.75 13.5161 14.75 12C14.75 10.4839 13.5161 9.25 12 9.25Z" fill="black" stroke="black"/>
<path d="M15.21 22.1903C15 22.1903 14.79 22.1603 14.58 22.1103C13.96 21.9403 13.44 21.5503 13.11 21.0003L12.99 20.8003C12.4 19.7803 11.59 19.7803 11 20.8003L10.89 20.9903C10.56 21.5503 10.04 21.9503 9.42 22.1103C8.79 22.2803 8.14 22.1903 7.59 21.8603L5.87 20.8703C5.26 20.5203 4.82 19.9503 4.63 19.2603C4.45 18.5703 4.54 17.8603 4.89 17.2503C5.18 16.7403 5.26 16.2803 5.09 15.9903C4.92 15.7003 4.49 15.5303 3.9 15.5303C2.44 15.5303 1.25 14.3403 1.25 12.8803V11.1203C1.25 9.66029 2.44 8.47029 3.9 8.47029C4.49 8.47029 4.92 8.30029 5.09 8.01029C5.26 7.72029 5.19 7.26029 4.89 6.75029C4.54 6.14029 4.45 5.42029 4.63 4.74029C4.81 4.05029 5.25 3.48029 5.87 3.13029L7.6 2.14029C8.73 1.47029 10.22 1.86029 10.9 3.01029L11.02 3.21029C11.61 4.23029 12.42 4.23029 13.01 3.21029L13.12 3.02029C13.8 1.86029 15.29 1.47029 16.43 2.15029L18.15 3.14029C18.76 3.49029 19.2 4.06029 19.39 4.75029C19.57 5.44029 19.48 6.15029 19.13 6.76029C18.84 7.27029 18.76 7.73029 18.93 8.02029C19.1 8.31029 19.53 8.48029 20.12 8.48029C21.58 8.48029 22.77 9.67029 22.77 11.1303V12.8903C22.77 14.3503 21.58 15.5403 20.12 15.5403C19.53 15.5403 19.1 15.7103 18.93 16.0003C18.76 16.2903 18.83 16.7503 19.13 17.2603C19.48 17.8703 19.58 18.5903 19.39 19.2703C19.21 19.9603 18.77 20.5303 18.15 20.8803L16.42 21.8703C16.04 22.0803 15.63 22.1903 15.21 22.1903ZM12 18.4903C12.89 18.4903 13.72 19.0503 14.29 20.0403L14.4 20.2303C14.52 20.4403 14.72 20.5903 14.96 20.6503C15.2 20.7103 15.44 20.6803 15.64 20.5603L17.37 19.5603C17.63 19.4103 17.83 19.1603 17.91 18.8603C17.99 18.5603 17.95 18.2503 17.8 17.9903C17.23 17.0103 17.16 16.0003 17.6 15.2303C18.04 14.4603 18.95 14.0203 20.09 14.0203C20.73 14.0203 21.24 13.5103 21.24 12.8703V11.1103C21.24 10.4803 20.73 9.96029 20.09 9.96029C18.95 9.96029 18.04 9.52029 17.6 8.75029C17.16 7.98029 17.23 6.97029 17.8 5.99029C17.95 5.73029 17.99 5.42029 17.91 5.12029C17.83 4.82029 17.64 4.58029 17.38 4.42029L15.65 3.43029C15.22 3.17029 14.65 3.32029 14.39 3.76029L14.28 3.95029C13.71 4.94029 12.88 5.50029 11.99 5.50029C11.1 5.50029 10.27 4.94029 9.7 3.95029L9.59 3.75029C9.34 3.33029 8.78 3.18029 8.35 3.43029L6.62 4.43029C6.36 4.58029 6.16 4.83029 6.08 5.13029C6 5.43029 6.04 5.74029 6.19 6.00029C6.76 6.98029 6.83 7.99029 6.39 8.76029C5.95 9.53029 5.04 9.97029 3.9 9.97029C3.26 9.97029 2.75 10.4803 2.75 11.1203V12.8803C2.75 13.5103 3.26 14.0303 3.9 14.0303C5.04 14.0303 5.95 14.4703 6.39 15.2403C6.83 16.0103 6.76 17.0203 6.19 18.0003C6.04 18.2603 6 18.5703 6.08 18.8703C6.16 19.1703 6.35 19.4103 6.61 19.5703L8.34 20.5603C8.55 20.6903 8.8 20.7203 9.03 20.6603C9.27 20.6003 9.47 20.4403 9.6 20.2303L9.71 20.0403C10.28 19.0603 11.11 18.4903 12 18.4903Z" fill="black"/>
</svg>

        `,
      },
      {
        title: "إدارة المستخدمين",
        href: "../../../pages/",
        active: currentPage === "pages/users-role.html",
        icon: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.15859 10.87C9.05859 10.86 8.93859 10.86 8.82859 10.87C6.44859 10.79 4.55859 8.84 4.55859 6.44C4.55859 3.99 6.53859 2 8.99859 2C11.4486 2 13.4386 3.99 13.4386 6.44C13.4286 8.84 11.5386 10.79 9.15859 10.87Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.4112 4C18.3512 4 19.9112 5.57 19.9112 7.5C19.9112 9.39 18.4113 10.93 16.5413 11C16.4613 10.99 16.3713 10.99 16.2812 11" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.15875 14.56C1.73875 16.18 1.73875 18.82 4.15875 20.43C6.90875 22.27 11.4188 22.27 14.1688 20.43C16.5888 18.81 16.5888 16.17 14.1688 14.56C11.4288 12.73 6.91875 12.73 4.15875 14.56Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        `,
      },
    
      {
        title: "بيانات المنشآه",
        href: "../../../pages/companies/index.html",
        active: currentPage === "pages/companies/index.html",
        icon: `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 22H22" stroke="black"/>
<path d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z" fill="black"/>
<path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22V6C2.25 2.98 3.98 1.25 7 1.25H17C20.02 1.25 21.75 2.98 21.75 6V22C21.75 22.41 21.41 22.75 21 22.75ZM3.75 21.25H20.25V6C20.25 3.78 19.22 2.75 17 2.75H7C4.78 2.75 3.75 3.78 3.75 6V21.25Z" fill="black"/>
<path d="M10 17.25H7C6.59 17.25 6.25 16.91 6.25 16.5C6.25 16.09 6.59 15.75 7 15.75H10C10.41 15.75 10.75 16.09 10.75 16.5C10.75 16.91 10.41 17.25 10 17.25Z" fill="black"/>
<path d="M17 17.25H14C13.59 17.25 13.25 16.91 13.25 16.5C13.25 16.09 13.59 15.75 14 15.75H17C17.41 15.75 17.75 16.09 17.75 16.5C17.75 16.91 17.41 17.25 17 17.25Z" fill="black"/>
<path d="M10 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H10C10.41 11.25 10.75 11.59 10.75 12C10.75 12.41 10.41 12.75 10 12.75Z" fill="black"/>
<path d="M17 12.75H14C13.59 12.75 13.25 12.41 13.25 12C13.25 11.59 13.59 11.25 14 11.25H17C17.41 11.25 17.75 11.59 17.75 12C17.75 12.41 17.41 12.75 17 12.75Z" fill="black"/>
<path d="M10 8.25H7C6.59 8.25 6.25 7.91 6.25 7.5C6.25 7.09 6.59 6.75 7 6.75H10C10.41 6.75 10.75 7.09 10.75 7.5C10.75 7.91 10.41 8.25 10 8.25Z" fill="black"/>
<path d="M17 8.25H14C13.59 8.25 13.25 7.91 13.25 7.5C13.25 7.09 13.59 6.75 14 6.75H17C17.41 6.75 17.75 7.09 17.75 7.5C17.75 7.91 17.41 8.25 17 8.25Z" fill="black"/>
</svg>

        `,
      },
      {
        title: "تسجيل الخروج",
        href: "/",
        active: currentPage === "signout",
        icon: `
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.2405 22.2705H15.1105C10.6705 22.2705 8.5305 20.5205 8.1605 16.6005C8.1205 16.1905 8.4205 15.8205 8.8405 15.7805C9.2405 15.7405 9.6205 16.0505 9.6605 16.4605C9.9505 19.6005 11.4305 20.7705 15.1205 20.7705H15.2505C19.3205 20.7705 20.7605 19.3305 20.7605 15.2605V8.74047C20.7605 4.67047 19.3205 3.23047 15.2505 3.23047H15.1205C11.4105 3.23047 9.9305 4.42047 9.6605 7.62047C9.6105 8.03047 9.2605 8.34047 8.8405 8.30047C8.4205 8.27047 8.1205 7.90047 8.1505 7.49047C8.4905 3.51047 10.6405 1.73047 15.1105 1.73047H15.2405C20.1505 1.73047 22.2505 3.83047 22.2505 8.74047V15.2605C22.2505 20.1705 20.1505 22.2705 15.2405 22.2705Z"
              fill="#F04438"
            />
            <path
              d="M14.9991 12.75H3.61914C3.20914 12.75 2.86914 12.41 2.86914 12C2.86914 11.59 3.20914 11.25 3.61914 11.25H14.9991C15.4091 11.25 15.7491 11.59 15.7491 12C15.7491 12.41 15.4091 12.75 14.9991 12.75Z"
              fill="#F04438"
            />
            <path
              d="M5.84945 16.0998C5.65945 16.0998 5.46945 16.0298 5.31945 15.8798L1.96945 12.5298C1.67945 12.2398 1.67945 11.7598 1.96945 11.4698L5.31945 8.11984C5.60945 7.82984 6.08945 7.82984 6.37945 8.11984C6.66945 8.40984 6.66945 8.88984 6.37945 9.17984L3.55945 11.9998L6.37945 14.8198C6.66945 15.1098 6.66945 15.5898 6.37945 15.8798C6.23945 16.0298 6.03945 16.0998 5.84945 16.0998Z"
              fill="#F04438"
            />
          </svg>
        `,
      },
    ];


    this.innerHTML = `
      <aside
        id="logo-sidebar"
        class="fixed top-0 right-0 z-40 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 pb-4 overflow-y-auto">
          <div class="flex gap-x-6 mt-4">
            <button onclick="toggleSidebar()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 7H21H3Z" fill="black" />
            <path d="M3 7H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" />
            <path d="M3 12H21H3Z" fill="black" />
            <path d="M3 12H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" />
            <path d="M3 17H21H3Z" fill="black" />
            <path d="M3 17H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" />
          </svg>
            </button>
            <img src="${this.img}" class='w-[108px] logo'>
          </div>
          <ul class="space-y-1 mt-3 font-medium">
            ${menu.map(({ href, active, icon, title }) => {
              return `
                <li>
                  <a
                    href="${href}"
                    class="flex items-center p-2 ${active ? "bg-[#377DFFa] text-whitea" : ""} text-gray-900 rounded-lg group"
                  >
                    ${icon}
                    <span class="ms-3 text-[14px] sidebar-list">${title}</span>
                  </a>
                </li>`;
            }).join('')}
          </ul>
        </div>
      </aside>
    `;
  }
}

customElements.define('main-sidebar', Sidebar);