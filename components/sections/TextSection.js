import { PortableText } from "../../utils/sanity";

function TextSection(props) {
  const { text } = props;
  return (
    <div>
      <div className="container mx-auto px-6">
        <div className="text-center text-2xl lg:text-5xl md:items-center md:text-2xl md:text-center">
          {text && <PortableText blocks={text} />}
        </div>
      </div>
    </div>
  );
}

export default TextSection;
