# Project Shopping Cart
## Technology
- ReactJS
- Redux
## Setting common routing
- Feature path: ```/product```
- Sub-routing: 

 STT | Path | Pages
--- | --- | --- 
1 | /product | Product Search Page
2 | /product/:productId | Product Detail
3 | * | Not Found
### Structure Feature Listing Product
```
    Box(full section)
    |__Container(fixed width content)
        |__Grid container(flexbox container)
            |__Grid Item(left column)
            |  |__ProductFilterForm
            |
            |__Grid Item(right column)
            |  |__ProductSortOption
            |  |__ProductList
            |  |__Pagination
```
