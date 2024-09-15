import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

// eslint-disable-next-line react/prop-types
export default function ToDo({ todo, handleTaskCompletion }) {
  return (
    <>
      <Card sx={{ minWidth: 275 }} className="bg-[#283593] text-white my-2">
        <CardContent>
          <Typography component={"div"} className="text-6xl">
            <Grid container spacing={2}>
              <Grid size={8}>
                <Typography component={"p"} className="text-2xl p-4 text-right">
                  {todo.title}
                </Typography>
                <Typography component={"p"} className="text-lg p-4 text-right">
                  {todo.details}
                </Typography>
              </Grid>
              <Grid size={4} className="flex justify-around">
                <IconButton
                  onClick={() => {
                    handleTaskCompletion(todo.id);
                  }}
                  className={`focus:outline-none`}
                >
                  <CheckIcon className={`border-2 border-[#8bc34a] text-3xl rounded-full p-1 hover:bg-[#c5c5c5] transition hover:shadow-[0px_7px_7px_rgba(0,0,0,0.4)] ${todo.isCompleted ? 'text-white bg-[#8bc34a]' : 'text-[#8bc34a] bg-white'}`} />
                </IconButton>
                <IconButton className="focus:outline-none">
                  <ModeEditOutlineOutlinedIcon className="text-[#1769aa] bg-white border-2 border-[#1769aa] text-3xl rounded-full p-1 hover:bg-[#c5c5c5] transition hover:shadow-[0px_7px_7px_rgba(0,0,0,0.4)]" />
                </IconButton>
                <IconButton className="focus:outline-none">
                  <DeleteOutlinedIcon className="text-[#b23c17] bg-white border-2 border-[#b23c17] text-3xl rounded-full p-1 hover:bg-[#c5c5c5] transition hover:shadow-[0px_7px_7px_rgba(0,0,0,0.4)]" />
                </IconButton>
              </Grid>
            </Grid>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
