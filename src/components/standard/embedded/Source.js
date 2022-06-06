import { CreateComponent } from "@riadh-adrani/recursive";

export default ({
    type,
    src,
    srcSet,
    sizes,
    media,
    height,
    width,
    props,
    key,
    events,
    hooks,
    style,
    flags,
}) => {
    return new CreateComponent({
        tag: "source",
        props: { ...props, referrerPolicy, type, src, srcSet, sizes, media, height, width },
        key,
        events,
        hooks,
        style,
        flags,
    });
};
