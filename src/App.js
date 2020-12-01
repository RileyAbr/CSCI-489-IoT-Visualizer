import "./App.css";
import packetBarData from "./packet_bar_data.json";
import packetLineData from "./packet_line_data.json";
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

const labelStyling = {
    color: "black"
};

function App() {
    return (
        <main>
            <h1>Packet Sniffers 👃</h1>
            <section>
                <BarChart
                    width={1800}
                    height={800}
                    data={packetBarData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 10 }}
                >
                    <XAxis dataKey="mac_address" hide={true} />
                    <YAxis />
                    <Tooltip labelStyle={labelStyling} />
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </section>
            <section>
                <LineChart
                    width={1800}
                    height={800}
                    data={packetLineData}
                    margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
                >
                    <XAxis
                        dataKey="hour"
                        tickFormatter={(label) => `${label}:00`}
                    />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip labelStyle={labelStyling} />
                    <Line
                        type="monotone"
                        dataKey="count"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </section>
        </main>
    );
}

export default App;
