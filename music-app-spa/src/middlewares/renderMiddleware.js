import {render} from "../../node_modules/lit-html/lit-html.js";
import { navigationView } from "../views/navigationView.js";

const headerElement = document.querySelector(".header-navigation");
//const root = document.querySelector("main");
const mainElement = document.querySelector("#main-content");


//ctx.render = (content) => render(content, root);
const renderContentModel = (templateResult) => {
render (templateResult,mainElement);
}

export const renderNavigation = (ctx, next) => {

    render(navigationView(ctx),headerElement);

    next();
}

export const renderContent = (ctx,next) => {
    ctx.render = renderContentModel;

    next();
}


