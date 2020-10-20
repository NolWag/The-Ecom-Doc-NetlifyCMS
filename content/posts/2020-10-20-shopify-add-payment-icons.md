---
template: SinglePost
title: Shopify Add Payment Icons
status: Draft
date: 2020-10-20
excerpt: "Add payment and credit card icons anywhere on your store with these
  code blocks. "
meta:
  title: Shopify Add Payment Icons
---


Add credit card and payment icons anywhere on your Shopify store. 



```
{%- unless shop.enabled_payment_types == empty -%}
  <span class="visuallyhidden">Supported payment methods</span>

  <ul>
    {%- for type in shop.enabled_payment_types -%}
      <li>
        {{ type | payment_type_svg_tag: class: 'icon icon--full-color' }}
      </li>
    {%- endfor -%}
  </ul>
{%- endunless -%}
```



Here are the styles, this should be added in your "theme.liquid.scss" or "styles.liquid.scss, but you can wrap a <style></style> around the code below and paste these two blocks together.   



```
.icon {
  width: 3.125em;
}
.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}
```