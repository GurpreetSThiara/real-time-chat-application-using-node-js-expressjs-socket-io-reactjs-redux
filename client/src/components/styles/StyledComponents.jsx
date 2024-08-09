import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
import colors from "../../../constants/colors";




export const Link = styled(LinkComponent)({
    textDecoration:'none',
    color:colors.textColors.link,
    "&:hover":{
        color:colors.textColors.linkHover,
    }
})