import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
const PieCharts = ({TotalIntrast,TotalAmount}) => {


  return (
    <div>
      <Pie
       type='pie'
      data={{
        labels:["Total Intrast","Totl Amount"],
        datasets:[{
          data:[TotalIntrast,TotalAmount],
          backgroundColor:['#f5aa69','#2e7d32']
        }]
      }} 
      height={300} 
      width={300}
      />
    </div>
  )
}

export default PieCharts
