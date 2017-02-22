function storageListe(listName){
	/* Philippe Meyer 2015 : stockage d'un tableau dans localstorage*/
	/* Philippe Meyer 2015 : storing an array in localstorage*/
	this.name = listName;
	this.storageOK=(typeof(Storage) !== "undefined");
	this.listArr = [];
	if (localStorage.getItem(listName)== null)
		localStorage[listName]= JSON.stringify(this.listArr);
	else {
		var vList = localStorage[listName];
		if(vList!=""){
			this.listArr = JSON.parse(vList);
		}
	}

	
	this.add=function(clef){
		if(this.storageOK){
			if (localStorage.getItem(this.name)!= null){
				var vList = localStorage[listName];
				if(vList!=""){
					this.listArr = JSON.parse(vList);
				}
			}
			var pos = this.listArr.indexOf(clef);
			if(pos==-1){
				this.listArr.push(clef);
				localStorage[this.name] = JSON.stringify(this.listArr);				
			}
		}
	}
	this.remove=function(clef){
		if(this.storageOK){
			if (localStorage.getItem(this.name)!= null){
			this.listArr = JSON.parse(localStorage[this.name]);
			}
			var pos = this.listArr.indexOf(clef);
			if(pos!=-1){
				this.listArr.splice(pos,1);
				localStorage[this.name] = JSON.stringify(this.listArr);					
			}
		}
	}
	this.addall=function(arr){
		this.removeall();
			for(var i = 0; i < arr.length;i++){
				this.add(arr[i]);
			}
	}
	this.removeall=function(){
		 localStorage.removeItem(this.name);
	}
	this.count=function(){
		if (localStorage.getItem(this.name)!= null){
			this.listArr= JSON.parse(localStorage[this.name]);
		}
		return this.listArr.length;
		
	}
	this.getList=function(){
		if (localStorage.getItem(this.name)!= null){
			this.listArr= JSON.parse(localStorage[this.name]);
		}
		return this.listArr;
	}