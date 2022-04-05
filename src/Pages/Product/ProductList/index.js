import Card from '../../../Components/Card'
import { PRODUCT_ROUTE } from '../../../Constants'

const ProductList = (props) => {
    const { list } = props

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {list?.length === 0 && <h4 style={{ color: "red" }}>Loading...!! Please wait</h4>}
                {list?.map((_items) => {
                    const { image, title, id, category } = _items
                    return (
                        <Card url={image} id={id} catagory_name={category}
                            description={title}
                            route={`/${PRODUCT_ROUTE}/${id}`} />
                    )
                })}
            </div>
        </div>

    )
}

export default ProductList