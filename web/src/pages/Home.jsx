import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useGetData } from '../hooks/useData'
import CardGroup from 'react-bootstrap/CardGroup';


export const Home = () => {

    const data = useGetData('http://localhost:4000')

  return (
    <div>

    <CardGroup>

      {data.map(obj=>

      <div className="main_page" key={obj._id}>
        <Card style={{ width: '18rem' }}>

          <Card.Img variant='top' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAACyCAMAAABFl5uBAAAAV1BMVEWGjpby8vKBiZL19fXh4uPGycygpqynrLKUm6Lt7e1/h5Db3d749/fBxMiPlp6XnqWJkZnm5+jO0dPt7u60ub3V19m7v8PMz9HDxsqssLW2ur+coqmQl59rVcbdAAAEdElEQVR4nO3d22KiMBRGYRLAE4KABav4/s850SrKYcegkrCZf13M1ZTGz0gB0XgeQgghhBBCCCGEEEIIIYQQQgghhBBCFpPeqlo4q9olrgHo0sVPWESBq6Li91i5NiCqysBXCVddfnfxs5KuHXpaRsKdS+0jDhOcOsfAtcutoprYzJGLqdAonLNrjWZJ4Vrk0T50rdFIlnvXIk9lC9cezyWRa49GhwntceQxq8flu6seQzChg0D5u74PKzuErnrs8rLldCaOzOthnVLpql1+nznrn+nYbOrdTeby7+die7cpp2Rze8b8yOUrfVXbxLBpBRs62NDBhg42dAxt1KGHl17/HTl2NvJ8LMM8z8PyOPYlOWY2soqLYH0929kHRTzuZSdmNqdo/zgF9PfFacxhsLJJw3XrEnIWjriz5mST5qLT/jAeDiMbeejSjHrFko+NPPXRKJzRTpL52KyyfhsRjPUOEhsbGVLv5O3DkUbOxiZdEzRq4qzGGQYXG3kkaUa7ZMnGJqRtBr5HYvyfudhsdO8BR4OGfjLdd7OxoXc3aoczZONlFhnisLHR0IggNd92rJANcdjY6N4gH2ATX+efGQ4bG+rI72pjPPT49tI0Ol7kYiN1N50UG8MNx/VeywSHjQ1xNjVo6PHTDt0Ah4uNd6Zv/jO9PyZu/K17jcPGRtK35ERmW41bhwEvcfjYLKiJsz4ajbxN8xqHjY0ncwInN9pml0a9GPU4fGy8NOvFMTsL76NRODvdzzCy8VbtK+kGz/2tfpoXOJxsvFVn5viB9pm/F5NH1TocVjZekm+fdXw/N7qvi5o1L3B42XjpMtrebuD0fT9aGp1I0bNGj8PMRulUZZH5W5EVZWV2iqmbNVocdjaq9C/DjelnzfWhEzgcbQb1mobEmbuNCY0Q+95jpJnbxCYyFM68bUxp+nHmbJOa06jHf+48/jnbDKFRdXBmbDOQRoj2/YOztRn0guqfOdxtJHEI+A6N8Jszh7lNGma9OG/RiNbLirdNGm57PzD4Lk0Th7XNhabv05Tv0wixezBwtvmj6eJ8QqNw6u0wtrnTCBE1rnB9RiNE/Sv52jxomjhp/OFXfNQTh63NM43CqU+Hkg9nzQxsmjQPnM9p2Nu0ae44X6DhbtOl+cNJPt3X8Lfpo7ngfIWGt00/jTrO0d1n+3/YUDTiS9/PxdiGpvlSfG1Gp+FrMz4NWxsLNFxtbNAwtbFCw9MmsULD0sYSDUebhPzA5n9vkxxsfSstOxv6Y76w2dj7LmN+NtZoYAMb2MAGNtdgQwcbOtjQwYYONnSwoeu1sXRC5fv8bOytrVTfrsLFxltaq77xlI2NZ2vpgccw+NjYDzZ0sKGDDR1s6CZqcz8Sw3ow7Z7WESoTW3+7O01zHaHn9adyrD/VSC6xbhkZ1rujwzqJmia1vuava41mk1qXdaSv1X4/rOeraSLrQIdGX+hlO6wfrsn1uvP5dNedv3TeVQtXVbspHfIhhBBCCCGEEEIIIYQQQgghhBBCCM2of7WEeNNGdKSGAAAAAElFTkSuQmCC" />
          <Card.Body>

            <Card.Title>{obj.title}</Card.Title>

            <Card.Text>
              {obj.text}
            </Card.Text>

            <Button variant="primary">Go somewhere</Button>

          </Card.Body>

          <Card.Footer>
            <small className="text-muted">Created at {obj.createdAt}</small>
          </Card.Footer>

        </Card>
      </div>

      )}
    </CardGroup>
    </div>
  )
}
