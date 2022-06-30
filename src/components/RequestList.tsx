import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import React from 'react';

export const RequestList = () => {
    const columns = [
        {
            header: 'Дата добавления',
            accessor: 'addDate',
        },
        {
            header: 'Тип заявки',
            accessor: 'type',
        },
        {
            header: 'Статус',
            accessor: 'status',
        },
        {
            header: 'Автор',
            accessor: 'author',
        },
        {
            header: 'Текст',
            accessor: 'requestText',
        },
    ]
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {columns.map((c,i)=><TableCell key={i}>
                            {c.header}
                        </TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/*{rows.map((row) => (*/}
                    {/*    <TableRow key={row.name}>*/}

                    {/*        <TableCell component="th" scope="row">*/}
                    {/*            {row.name}*/}
                    {/*        </TableCell>*/}
                    {/*        <TableCell align="right">{row.calories}</TableCell>*/}
                    {/*        <TableCell align="right">{row.fat}</TableCell>*/}
                    {/*        <TableCell align="right">{row.carbs}</TableCell>*/}
                    {/*        <TableCell align="right">{row.protein}</TableCell>*/}
                    {/*    </TableRow>*/}
                    {/*))}*/}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

