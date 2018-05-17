console.log('tallies the height of each element in an array')
console.log('returns the lowest possible height of any two elements combined')

    const galleryDiv = document.querySelector('.gallery_photo_gallery').clientHeight
    // console.log(galleryDiv)
    const gridItems = document.querySelectorAll('.grid_item')
    // console.log(gridItems)
    var myarray = [];

    gridItems.forEach((elem) => {
        myarray.push(elem.clientHeight)
    })

    // console.log(myarray)

    function powerSet( list ){
        var uniquepairs = []
        var orderednumbers = []
        var set = []
        var listSize = list.length
        var combinationsCount = (1 << listSize)
        console.log(combinationsCount)
        var combination

        for (var i = 1; i < combinationsCount ; i++ ){
            var combination = [];
            for (var j=0;j<listSize;j++){
                if ((i & (1 << j))){
                    combination.push(list[j]);
                }
            }
            set.push(combination);
        }

        // console.log(set, ' im the set')
        set.forEach(ar => {
            if(ar.length === 2){
                uniquepairs.push(ar)
            }
        })

        uniquepairs.forEach(arr => {
            const sum = arr.reduce((a,b) => {
                return a + b
            })
            // console.log(sum)
            orderednumbers.push(sum)
        })

        // console.log(orderednumbers)
        const answer = orderednumbers.sort((a, b) => {
            return a - b
        })[0]

        return answer
        // console.log(answer)
        return uniquepairs
        // return set;
    }
    console.log(powerSet(myarray))

  // const { projects } = AppStore.data
  // this.analyzeComponentHeight(galleryDiv, gridItems)
  //
  // const containerHeight = galleryDiv.clientHeight - 100
  // let totalElementsHeight = 0
  // gridItems.forEach((item) => totalElementsHeight += item.offsetHeight)
  // let heights = []
  // console.log(containerHeight)
  // console.log(totalElementsHeight)

// for all combinations
// https://codereview.stackexchange.com/questions/7001/generating-all-combinations-of-an-array
