select * from dbshop.tbcategory;

-- mencari root node
select * from tbcategory where parentId is null;

-- mencari children dari sebuah node
select * from tbcategory where parentId = 4;

-- mencari leaf node atau children yang tidak memiliki parent
select 		*	
            from tbcategory tb1
			left join tbcategory tb2
            on tb2.parentId = tb1.idcategory
            where tb2.category is null;
            
-- whole tree tb category
-- cara manual
select 		tb1.category as category1, 
			tb2.category as category2, 
            tb3.category as category3,
            tb4.category as category4
			from tbcategory tb1
			left join tbcategory tb2 on tb2.parentId = tb1.idcategory
            left join tbcategory tb3 on tb3.parentId = tb2.idcategory
            left join tbcategory tb4 on tb4.parentId = tb3.idcategory
            where tb4.category is not null and tb3.category is not null;


-- cara with recursive
With Recursive category path (idcategory, category, path)AS
(	
	select idcategory, category, category as path
		from tbcategory
        where parentId is null
	union all
    select tbc.idcategory, tb.category, concat(cp.path,'>',tbc.category)
		from category_path cp join tbcategory tbc 
        on cp.idcategory = tbc.parentId
)
select * from category_path;
            
            