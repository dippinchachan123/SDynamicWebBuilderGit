import { configDataType } from "strapi-frontend/dist/Strapi";

export const config : configDataType = {
    url : "https://strapi.evervent.in",
    blocksPath : "data.attributes.Blocks",
    sectionPath : "ele.Section",
    HTMLPathInBlock : "ele.Content[0].content",
    visibilityPath : "ele.Active",
    classNamePath : "ele.ClassName"
}