let order=[{
    "customer":"Mr.lee",
    "Itemorder":["A4 Paper","Ruler"],
    "Qty":[5,2],
    "Price":[120,25]
},
{
    "customer":"Mr.Yue",
    "Itemorder":["Flash Drive","A4 Paper"],
    "Qty":[2,3],
    "Price":[130,120]
},
{
    "customer":"Mr.Golf",
    "Itemorder":["Flash Drive","A4 Paper","Ruler"],
    "Qty":[2,3,1],
    "Price":[130,120,100]
}
]
for(i=0;i<order.length;i++){
    var sum1=0;
    for(let j=0;j<order[i].Itemorder.length;j++){
        sum1 += order[i].Price[j] * order[i].Qty[j];
    }
    console.log(order[i].customer,sum1)

}

