import { CreateComponent } from "@riadh-adrani/recursive";

export default ({ props, height, src, type, width, key, events, hooks, style, flags }) => {
    return new CreateComponent({
        tag: "embed",
        props: { ...props, height, src, type, width },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
