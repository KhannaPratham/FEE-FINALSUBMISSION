let list_html = [`<section id="change">
<p>Address</p>
<input type="text" placeholder="Street, nbr" />
<input type="text" placeholder="City" />
<input type="text" placeholder="Postcode" />
<input type="text" placeholder="Country" />
</section>`, `<section id="change">
<p>Contact information</p>
<input type="text" placeholder="Email address" />
<input type="text" placeholder="Phone" />
<input type="text" placeholder="Mobile" />
</section>`, `<section id="change">
<p>Expertise Language</p>
<input type="text" placeholder="Enter A Language" />
<input type="text" placeholder="Enter Another Language" />
</section>`, `<section id="change">
<p>Thank you so much for taking your time to fill up the form, this form will help you to be connected to like minded subject matter experts to colaborate in research and projects. for any queries contact-98878863246</p>
</section>`]
let i = 0
list_length = list_html.length;
document.getElementById("next").onclick = function () {
    if (i < list_length) {
        document.getElementById("change").outerHTML = list_html[i]
        i = i + 1;
    }
}
