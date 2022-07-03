import {AppBar, Toolbar, Typography} from "@material-ui/core";
import {PhotoCamera} from "@material-ui/icons";



const MytoolBar = ({classes}) => {
    return (
        <AppBar position = 'relative'>
       <Toolbar>
           <PhotoCamera className = {classes.icon}/>
           <Typography variant = 'h6' align = 'right'>
               آلبوم عکس
           </Typography>
       </Toolbar>
   </AppBar>
    );
}

export default MytoolBar;
