import React from "react";
import { IconType } from "react-icons";

export interface ICardContent {
    title: string;
    paragraph: string;
    imageUrl: string;
}

export interface IHabilities {
    name: string;
    icon: React.ReactNode;
}