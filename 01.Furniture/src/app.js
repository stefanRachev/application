import page from "../node_modules/page/page.mjs";
import { loginView } from "./login.js";
import { homePage } from "./homeView.js";
import { registerPage } from "./register.js";
import { updateNav } from "./utils.js";
import { logout } from "./logout.js";
import { createFurniture } from "./newFurniture.js";
import { detailsResult } from "./details.js";
import { deleteElement } from "./delete.js";
import { editElement } from "./edit.js";
import { myGetFurniture } from "./myFurniture.js";




updateNav();


page("/", homePage);
page("/update/:id",editElement );
page("/register", registerPage);
page("/login", loginView);
page("/my-furniture", createFurniture);
page("/details/:id", detailsResult);
page("/delete/:id", deleteElement);
page("/edit", myGetFurniture);



page.start();


