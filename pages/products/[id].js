import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import SEO_C from "../../components/SEO_C";
import TabProduct from "../../components/Tab/TabProduct";
import SimpleLayout from "../../layouts/SimpleLayout";
import Carousel from "../../components/Carousel/Carousel";
import { useRouter } from "next/router";
import { useGetProductByID } from "../../hooks/useProduct";
import Loader from "../../components/Loader/Loader";
import { size } from "lodash";
import { useState } from "react";
import { setTIndex } from "../../utils/tabIndex";
import { useAuth } from "../../hooks";

export default function Product() {
  const { query } = useRouter();

  const [reloadProduct, setReloadProduct] = useState(false);

  const { product, images, loading } = useGetProductByID(
    query?.id,
    reloadProduct,
    setReloadProduct
  );

  const { auth } = useAuth();

  if (loading) return <Loader />;

  return (
    <SimpleLayout>
      {product && images && !loading && (
        <>
          <SEO_C title={product?.name} description={product?.description} />
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            mt={3}
            p={0}
          >
            {size(images) > 0 && <Carousel images={images} />}
            <TabProduct
              id={query?.id}
              name={product.name}
              description={product.description}
              currentBid={product.current_bid}
              startedBid={product.starting_bid}
              category={product?.category?.name}
              seller={`${product?.seller?.first_name} ${product?.seller?.last_name}`}
              setReloadProduct={setReloadProduct}
              created={product?.created}
              modified={product?.modified}
              isSold={product?.buyer !== null}
              idAuth={auth?.userData?.id}
              idSeller={product?.seller?.id}
              idBuyer={product?.buyer?.id}
            />
          </SimpleGrid>
        </>
      )}
    </SimpleLayout>
  );
}
