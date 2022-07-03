// import {useState} from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';


// let CARDS = ["https://images.kojaro.com/2018/11/6a374fa7-203c-4d87-9320-e29ad5d786c4.jpg",
//              "https://setare.com/files/1399/04/16/Untitled-1.jpg"]



// function FormDialog(){
//   const [open, setOpen] = useState(false);
//   const [txt, setTxt] = useState("");

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleNewTxt = (e) => {
//     const val = e.target.value
    
//     setTxt(val);
//   }

//   const handleSubmit = () => {
//     CARDS.push(txt)
//     console.log('TEXT IS:', txt)
//     console.log(CARDS);
//     handleClose()
//   };

//   return (
//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         افزودن
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>افزودن</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             در اینجا میتوانید به آلبومتان عکس اضافه کنید.
//           </DialogContentText>


//           <TextField
//             autoFocus
//             margin="normal"
//             id="link"
//             label="لینک تصویر را وارد کنید"
//             type="url"
//             fullWidth
//             variant ="standard"
//             onChange={handleNewTxt}
//             value={txt}
//           />

//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} variant = 'text'>لغو</Button>
//           <Button onClick={handleSubmit} variant = 'text'>تایید</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// export default FormDialog;
// export {CARDS};