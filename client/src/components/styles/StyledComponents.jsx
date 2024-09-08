import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
import colors from "../../constants/colors";




export const Link = styled(LinkComponent)({
    textDecoration:'none',
    color:colors.textColors.link,
    "&:hover":{
        color:colors.textColors.linkHover,
    }
})


export const InputBox = styled('input')(({ theme }) => ({
    width: '100%',
    height:'100%',
    padding: theme.spacing(1.5),
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
    outline: 'none',
    fontSize: '1rem',
    marginRight: theme.spacing(2),
    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
  }));