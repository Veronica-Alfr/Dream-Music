infosArtistOrBand.map(({ artistId, artistName, collectionName,
    collectionPrice, releaseDate, trackCount, collectionId,
    artworkUrl100,
  }) => (
    <section key={ collectionId }>
      <p>
        { artistId }
      </p>
      <p>
        { artistName }
      </p>
      <p>
        { collectionName }
      </p>
      <p>
        { collectionPrice }
      </p>
      <img src={ artworkUrl100 } alt={ collectionName } />
      <p>
        { releaseDate }
      </p>
      <p>
        { trackCount }
      </p>
    </section>
    