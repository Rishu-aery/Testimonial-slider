(function (){
    customer_img = document.getElementById('img');
    customer_name = document.getElementById('name');
    customer_text = document.getElementById('description');   

    btn = document.querySelectorAll('.btn');
    index = 0;
    customers = [];

    function Customer(img, name, text) {
        this.img = img;
        this.name = name; 
        this.text = text;
    }

    function create_customer(img, name, text) {
        let image = `./images/${img}.jpg`;
        let customer = new Customer(image, name, text);

        customers.push(customer)
    }

    create_customer(0, 'John', "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, tenetur ab! Et repellat ea, at mollitia,\
    asperiores excepturi quia similique aliquid pariatur necessitatibus delectus, nisi magni totam? Dolorem,\
    consequuntur necessitatibus!")

    create_customer(1, 'Sandy', "Dolor sit amet consectetur adipisicing elit. A, tenetur ab! Et repellat ea, at mollitia,\
    asperiores excepturi quia similique aliquid pariatur necessitatibus delectus, nisi magni totam? Dolorem,\
    consequuntur necessitatibus!")

    create_customer(2, 'Tyrell', "Sit amet consectetur adipisicing elit. A, tenetur ab! Et repellat ea, at mollitia,\
    asperiores excepturi quia similique aliquid pariatur necessitatibus delectus, nisi magni totam? Dolorem,\
    consequuntur necessitatibus!")

    create_customer(3, 'Adwin', "It Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, tenetur ab! Et repellat ea, at mollitia,\
    asperiores excepturi quia similique aliquid pariatur necessitatibus delectus, nisi magni totam? Dolorem,\
    consequuntur necessitatibus!")

    create_customer(4, 'Wanda', "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, tenetur ab! Et repellat ea, at mollitia,\
    asperiores excepturi quia similique aliquid pariatur necessitatibus delectus, nisi magni totam? Dolorem,\
    consequuntur necessitatibus!")

    btn.forEach(function(button){
        button.addEventListener('click', function(e){
            if (e.target.parentElement.classList.contains('prevbtn')) {
                if (index === 0) {
                    index = customers.length;
                }
                index--;
                customer_img.src = customers[index].img;
                customer_name.textContent = customers[index].name; 
                customer_text.textContent = customers[index].text; 
            }

            if (e.target.parentElement.classList.contains('nextbtn')) {
                index++;
                if (index === customers.length) {
                    index = 0;
                }
                customer_img.src = customers[index].img;
                customer_name.textContent = customers[index].name;
                customer_text.textContent = customers[index].text; 
            }
        })
    });
})()