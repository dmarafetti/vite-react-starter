type AvatarProps = {

    url: string,
    title?: string
};

export default function Avatar({url, title}: AvatarProps) {

    return (

        <img alt={title} src={url} width={24} height={24} className="border rounded-5"/>

    );
}
