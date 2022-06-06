import { CreateComponent } from "@riadh-adrani/recursive";

export default ({ text, flags, style }) => {
    return new CreateComponent({ tag: "legend", children: text, style, flags });
};
