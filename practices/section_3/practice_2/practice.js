function create_updated_collection(collection_a, object_b) {
	for(let i=0;i<collection_a.length;i++) {
		if(object_b.value.indexOf(collection_a[i].key)!=-1){
			collection_a[i].count-=Math.floor(collection_a[i].count/3);
		}
	}
	return collection_a;
}

module.exports = create_updated_collection;
