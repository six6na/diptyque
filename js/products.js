function getData() {
    // 여기에 깃허브 JSON 파일 경로(서버 데이터 주소)
    const DataURL = 'https://raw.githubusercontent.com/six6na/diptyque/main/data.json';
    fetch(DataURL)
    .then(function(res){
      return res.json(); // JSON 객체 변환
    })
    .then(function(obj){
      // obj 동물데이터
      showProducts(obj);
      console.log(obj)
    });
  }
  
  function showProducts(obj) {
    // 현재 페이지의 URL query 파라미터(매개변수)
    const query = location.search;
    console.log(query);
    // ? URL query문을 object(변수)로 변경
    let params = new URLSearchParams(query).get('category');
  
    // params == null 이면(시작 페이지 dog 출력)
    if(params == null) {
      params = "perfume"
    }
    console.log(params);  
  
    // 동물 데이터 출력
    obj.forEach(function(product){
      // 카테고리 구분 wireless | 무선헤드폰 | 유선헤드폰
      // 요청한 params와 제품카테고리명이 일치하는 데이터만 출력
      let category = product.category;
      let name = product.name;
      let price = product.price;
      let imgUrl = product.imgUrl;
      console.log(category);
      if(params == product.category) {
        let html = `
        <div class="product row">
                    <img src="${imgUrl}" alt="product img1">
                    <div class="p-txt">
                        <p class="name">${name}</p>
                        <p class="type">Family:${category}</p>
                        <div class="detail">
                            <p class="ml">75ml</p>
                            <p class="price">usd $${price}</p>
                        </div>
                        <p class="ex">The memory of a Greek summer at Mount Pelion where, to get to the sea, there <br>
                            was a natural grove of wild sun-soaked fig trees to cross through. Philosykos is <br>
                            an ode to the entire fig tree: the green freshness of the leaves, the milky flavour <br>
                            of the figs, underpinned by the woody density of the tree.</p>
                    </div>
                </div>
      `
      $('.productList').append(html);
      }
  
    });
  }
  
  $(function(){
    getData();
  });
  