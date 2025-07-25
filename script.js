function stringChop(str, size) {
  // your code here
	let s=""
	let a=[]
	for (let i = 0; i < str.length; i++) {
		if(s.length== size){
			a.push(s);
			s=""
		}
		else{
			s=s+str[i]
		}
		
	}
	a.push(s)
	return a;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
