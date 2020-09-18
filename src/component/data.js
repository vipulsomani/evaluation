import React,{Component} from 'react';
import Table from './Table'
class Data extends Component{
    state={
        employee:[
            {no:'1',name:'Vipul',salary:'1000',grade:'A',status:'Active'},
            {no:'2',name:'Hardik',salary:'2000',grade:'B',status:'Non Active'},
            {no:'3',name:'Dinky',salary:'4500',grade:'C',status:'Active'},
            {no:'4',name:'yash',salary:'3400',grade:'D',status:'Non Active'},
            {no:'5',name:'yashi',salary:'4000',grade:'A',status:'Active'},
            {no:'6',name:'pawan',salary:'7000',grade:'B',status:'Non Active'},
            {no:'7',name:'Satyen',salary:'8000',grade:'C',status:'Non Active'},
            {no:'8',name:'Amit',salary:'9000',grade:'D',status:'Active'},
            {no:'9',name:'Somani',salary:'1200',grade:'A',status:'Non Active'},
            {no:'10',name:'Rathore',salary:'3000',grade:'B',status:'Active'},
            
        ]
    }
    render(){
                let emp =(
                    this.state.employee.map(e=>{
                        return <Table
                        no ={e.no}
                        name={e.name}
                        salary={e.salary}
                        grade={e.grade}
                        status={e.status}>
                            
                        </Table>
                    })
                )
        return(
            /*
            const name="Emp Name";
            const no="Emp No;
            const salary="Emp Salary";
            const grade="Emp Grade";
            const status="Emp Status";
            */
            <div>
            <table border='1'>
            <tr>
            <th>No</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Grade</th>
            <th>Status</th>
            </tr>

            {emp}

        </table>
      
            
            </div>
        );
    }
}
export default Data