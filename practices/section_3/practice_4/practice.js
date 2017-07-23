function create_updated_collection(collection_a, object_b) {
let key={};
	let result=[];
	for(let i=0;i<collection_a.length;i++){
		if(collection_a[i].indexOf('-')!=-1){
			if(key[collection_a[i].substring(0,1)]==null){
				key[collection_a[i].substring(0,1)]=Number(collection_a[i].substring(2,collection_a[i].length));
			}else{
				key[collection_a[i].substring(0,1)]+=Number(collection_a[i].substring(2,collection_a[i].length));
			}
			continue;
		}
		if(key[collection_a[i]]== null){
			key[collection_a[i]]=1;
		}else{
			key[collection_a[i]]++;
		}
	}
	for(let item in key){
		result.push({key:item,count:key[item]});
	}
	for(let i=0;i<result.length;i++) {
		if(object_b.value.indexOf(result[i].key)!=-1){
			result[i].count-=Math.floor(result[i].count/3);
		}
	}
	return result;
}

module.exports = create_updated_collection;
