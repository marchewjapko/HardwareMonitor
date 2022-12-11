import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Stack,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead, TableRow,
    Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function DiskAccordion({disks}) {
    return (
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <div className={"system-info-row-title"}>
                    <Typography>Disks</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <div className={"system-info-accordion-details"}>
                    <Stack direction={"column"}>
                        <TableContainer>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">Size</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {disks.map((x) => (
                                        <TableRow
                                            key={x.item1}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell component="th" scope="row">
                                                {x.item1}
                                            </TableCell>
                                            <TableCell align="right">
                                                {Math.round(x.item2 / 1024 / 1024 / 1024)} GB
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Stack>
                </div>
            </AccordionDetails>
        </Accordion>
    );
}