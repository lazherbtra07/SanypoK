import { getProduct } from "@/lib/product";
import { TabCategory } from "./TapCategory";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductContainer from "./ProductContainer";

export const Product = async () => {
  const productChair = await getProduct("chair");
  const productTable = await getProduct("table");
  const productLamp = await getProduct("lamp");
  return (
    <section
      id="product"
      className="flex flex-col items-center justify-center "
    >
      <h1 className="text-4xl underline   font-bold">Product</h1>
      <div className="mt-5 w-full container px-[8%]">
        <Tabs className="" defaultValue={TabCategory[0].value}>
          <TabsList className="flex mb-6  gap-6  h-fit">
            {TabCategory.map((cate) => {
              const { value, icon: Icon } = cate;
              return (
                <TabsTrigger className="flex" key={value} value={value}>
                  <Icon className=" size-6" />
                  <span className="ml-2 text-[18px]">{value}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div>
            <TabsContent value="chair">
              <ProductContainer item={productChair} />
            </TabsContent>
            <TabsContent value="table">
              <ProductContainer item={productTable} />
            </TabsContent>
            <TabsContent value="lamp">
              <ProductContainer item={productLamp} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};
