import React from "react";
import Image from "next/image";
import { IconType } from "react-icons";

interface ShadowCardProps {
  text?: string;
  classes?: string;
  hasImage?: boolean;
  imageSrc?: string;
  imageClasses?: string;
  hasIcon?: boolean;
  Icon?: IconType;
}

const ShadowCard: React.FC<ShadowCardProps> = ({
  text,
  classes = "",
  hasImage = false,
  imageSrc,
  imageClasses = "",
  hasIcon = false,
  Icon,
}) => {
  return (
    <div className={`card-top-bg card-border-color border-2 card-shadow  ${classes}`}>
      {/* Icon or Image */}
      {hasImage && imageSrc && (
        <Image
          className={`${imageClasses}`}
          src={imageSrc}
          alt={text || ""}
          width={100}
          height={100}
        />
      )}

      {hasIcon && Icon && (
        <Icon
          size={32}
          className="rounded-md p-1 transition-colors duration-200 "
        />
      )}

      {/* Text */}
      {text && text !== "" && (
        <span className="text-xs font-semibold uppercase tracking-wider text-center">
          {text}
        </span>
      )}
    </div>
  );
};

export default ShadowCard;
