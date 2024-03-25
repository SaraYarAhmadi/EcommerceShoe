import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ProductContextViewModel } from '../../../context/productContex';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({
    title,
    category,
    price,
    size,
    color,
    description }: ProductContextViewModel) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }} className='text-2xl z-50'>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs className='font-MorabbaMedium child:text-2xl' value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="مشخصات" {...a11yProps(0)} className='text-2xl' />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <div className="flex font-DanaMedium text-base " role="tabpanel" id="1157-content" aria-labelledby="1157-label">
                    <div className='flex flex-col items-center justify-start child:py-2 child:w-full text-start w-full'>
                        <h4>جنس : چرم طبیعی</h4>
                        <h4>توضیحات: {description}</h4></div>
                </div>
            </CustomTabPanel>
        </Box>
    );
}