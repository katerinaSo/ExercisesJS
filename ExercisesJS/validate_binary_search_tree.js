function validate(node,min=null,max=null){
    if(max!==null&&node.data>max){
        return false
    }
    if(min!==null&&node.data<min){
        return false
    }
    if(node.left&&!validate(node.left,min,node.data)){
        return false
    }
    if(node.right&&!validate(node.right,node.data,max)){
        return false
    }
    return true
}

// we validate every left node to be less than parent data(value)
// we check every right node to be greater than parent data(value)
// once validation comes falsy - we return false