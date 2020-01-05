//----------------------------------------------
//Olivieri Photo
//----------------------------------------------
const photo = {
  title: "Olivieri Photo",
  summary:
    "Federico Oliviero is an experienced photographer located in Toronto, Canada. He specializes in Street/City, Event, and Portrait Photography. Federico expressed a need for a website that would showcase his talent. This was a redisgn of a previous website I had built for him. ",
  context: {
    role: "UX/UI Designer, Frontend Developer, ",
    technology:
      "Adobe: XD, Illustrator, Photoshop. HTML, CSS, Javascript. Node.js, Express, Cloudinary API."
  },
  challenge:
    "Federico wanted a website that would more accurately represent him artistically and woulden't stray from original color coordination of his previous site. He also wanted clients to be able to contact him directly through his website. His ultimate focus was to have a more modern looking site with slightly different functionality.",

  process: "Initial site UI was done in Abobe XD to reform page layout, page architecture, and design form layout, . Photoshop/ Illustrator were used to design a logo and icons specific to OlivieriPhoto. Node mailer and a contact form was added to the the backend for site messaging capability.",

  solution: "Federico's site was condensed from four to two pages which allowed the user to have easier navigation. The landing page served most immediate information for quick searchers and minimized clicking effort. Photos were showcased immediately on the landing page with option to explore his gallery further. Since the re-design Federico has been offered to exhibit his work at a local art gallery in Toronto, and the website has given him more exposure.",
};

//----------------------------------------------
//Passion SkateBoarding Ecomm
//----------------------------------------------

const passion = {
  title: "Passionate SK8 VIE",
  summary:
    "Markos Swcharz is an experienced skateboarder and videographer located in Vienna, Austria. He owns a european based skateboarding company. Markos's first goal was to pursue ecommerce. However, the goal wasn't to just sell skateboards but also re-create a skateboard community he grew up with and replicate it on line. The site was to act as an ecommerce, interactive, and showcase his videographer skills.",
  context: {
    role: "UX/UI Designer, Front end, React",
    technology:
      "Adobe: XD, Illustrator, Photoshop. React, Node.js, Express, Cloudinary API."
  },
  challenge:
    "Design and build a website that allowed Markos to sell products but also create an online skate community. The site would contain ecommerce functionality, skaters to upcoming events such as giveways, contests, etc. The techincal aspects would have to further include pay option API, Cloudinary API (for videos), and way to display the latest events.  ",
  process:
    "Sketches were made to lay the skeletal groundwork for the site then built upon in Abobe XD: this mapped out the GUI of the website (such as icons, colors, typography) and its navigational architecture. ",

  //Using React, the eccomerce portion of the page was created and the general landing page. The React ecommerce section existed as a front end application which would also serve as a Progressive Web App for mobile users.

  problems: {
    second:
      "The most difficult part of this project was to design and build an ecommerce site that would primarily exist as a frontend application why also serving the client and user functionally.",
    solution:
      "Use api calls to display upcoming events which allowed the application to still exist as a frontend application. Site speed was the primary focus to ensure credibility."
  },
  solution:
    'Markos has begun marketing his site and stated he is "shock and awe at the site". This was a good thing. '
};

//----------------------------------------------
//Skate Spots
//----------------------------------------------

const skate = {
  title: "Skate Spots",
  summary:
    "This was a personal project that was created to help skateboarders find skatespots across the globe. Originally skateboarders would first have to find a local skateshop and get to know poeple in order to get the latest updates on new skate spots. Even now, only the main stream skate parks are located on google and do not include specific street spots such as curbs, stairs, ledges, and handrails.",
  context: {
    role: "FullStack Developer, ",
    technology:
      "Adobe: XD, Illustrator, Photoshop. MongoDB, EJS, NodeJs, Express, Cloudinary API."
  },
  challenge: " The site had to include the users knowledge as the data entry for a variety of spots. Initially, deployed with little design UI in mind, it needed a facelift. More specifically it needed a brand.",
  process: {
   code: "Mongo NoSQL database was used for user authentication schemas, and skatespot schemas. Cloudinary was added so that the user could upload their own images to display spots. Geolocation gave the user to ability to find each spot more specifically.",
   design: "Used adobe XD to re-design a landing page. In this design more features needed to be added to the landing page. The branding was re-developed using guidelines that would invovle a set of rules for buttons, icons, and colors. "
  },

  problems: {
    problem: "The most difficult parts of this project were implementing user authenication without limiting the user to viewing spots and implenting cloudinary api & geolocation with async functions. Testing extensively to find the right programmatic and functional order.",

    solution: "Users now have an updated design focused site that serves as a global skate spot finder as well as a skateboarder community. "

    //User testing response
    //Chrome audit anaylitics
    //Image optimization

  }

};

//----------------------------------------------
//Drinkify Cocktail Search
//----------------------------------------------

const drink = {
  title: "Drink'd",
  summary:
    "This was a personal project that was a redisgn of a project originally built with gold old fashioned Html, CSS, and JS. The site allows the User to search different cocktail recipes. ",
  context: {
    role: "Front end, React",
    technology: "Adobe: XD, React, CocktailDB API."
  },
  challenge:
    "Design and build a Progessive Web App. Create designs that would emphasize the latest in desgin principles. The biggest challenge to this project was finding a way to parse the ingredient data which wasn't represented in your usual array form. Each ingredient was listed as its own individual object.",
  process:
    "Sketched layout and redesigned site layout, color UI, and icon list in Adobe XD. Build using React. The application was to exist as a single page application for quick load times and effortless usuability for the user.",
  solution: "Tell about chrome audit specifications and user testing"
};

