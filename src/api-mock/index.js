const routes = [
    {
      method: 'Get',
      url: '/api/products',
      status: 200,
      response: {
        data: [
          {
            id: 'product-1',
            image: 'https://via.placeholder.com/200',
            title: 'Product 1',
            price: 'Rp.100.000'
          },
          {
            id: 'product-2',
            image: 'https://via.placeholder.com/200',
            title: 'Product 2',
            price: 'Rp.100.000'
          },
          {
            id: 'product-3',
            image: 'https://via.placeholder.com/200',
            title: 'Product 3',
            price: 'Rp.100.000'
          },
          {
            id: 'product-4',
            image: 'https://via.placeholder.com/200',
            title: 'Product 4',
            price: 'Rp.100.000'
          },
          {
            id: 'product-5',
            image: 'https://via.placeholder.com/200',
            title: 'Product 5',
            price: 'Rp.100.000'
          }
        ]
      }
    },
    {
        method: 'Get',
        url: '/api/products/product-1',
        status: 200,
        response: {
          data:
            {
              id: 'product-1',
              image: 'https://via.placeholder.com/300',
              title: 'Ayam Goyeng',
              price: 'Rp.200.000'
            }
        }
    },
    {
        method: 'Get',
        url: '/api/products/product-2',
        status: 200,
        response: {
            data:
                {
                    id: 'product-2',
                    image: 'https://via.placeholder.com/200',
                    title: 'Bubur Rebus',
                    price: 'Rp.50.000'
                }
        },
    },
    {
        method: 'Get',
        url: '/api/products/product-3',
        status: 200,
        response: {
            data:
                {
                    id: 'product-3',
                    image: 'https://via.placeholder.com/200',
                    title: 'Nasi Panggang',
                    price: 'Rp.250.000'
                }
        },
    },
    {
        method: 'Get',
        url: '/api/products/product-4',
        status: 200,
        response: {
            data:
                {
                    id: 'product-4',
                    image: 'https://via.placeholder.com/200',
                    title: 'Es teh jangan dingin',
                    price: 'Rp.50.000'
                }
        },
    },
    {
        method: 'Get',
        url: '/api/products/product-5',
        status: 200,
        response: {
            data:
                {
                    id: 'product-5',
                    image: 'https://via.placeholder.com/200',
                    title: 'skrembel ek',
                    price: 'Rp.200.000'
                }
        },
    }
    
  ]
  
export default routes
  