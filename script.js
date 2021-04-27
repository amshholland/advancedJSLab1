fetch("https://www.reddit.com/r/aww/top.json")
    .then(response => response.json())
    .then(reddit => {

        for (let post of reddit.data.children) {
            const container = document.getElementById('container');

            const postDiv = document.createElement('div');
            postDiv.classList.add('postDiv');
            container.appendChild(postDiv);

            const div1 = document.createElement('div1');
            div1.classList.add('div1');
            postDiv.appendChild(div1);

            const div2 = document.createElement('div2');
            div2.classList.add('div2');
            postDiv.appendChild(div2);

            const imgEl = document.createElement('img');
            imgEl.classList.add('img');
            imgEl.src = post.data.thumbnail;
            div1.appendChild(imgEl);

            const link = document.createElement('a');
            link.classList.add('link');
            link.href = post.data.thumbnail;
            link.innerText = post.data.title;
            div1.appendChild(link);

            const upvotes = document.createElement('img');
            upvotes.classList.add('upvotes');
            upvotes.src = 'images/up.jpg';
            div2.appendChild(upvotes);

            const ups = document.createElement('div');
            ups.classList.add('ups');
            ups.innerText = `${post.data.ups}`;
            div2.appendChild(ups);

        }

    });