import { Image, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

const BotaoSalvar = () => {
  const imagemNaoSalva = require('../assets/coracaonsalvo.png');
  const imagemSalva = require('../assets/coracaosalvo.png');
  const [getImagem, setImagem] = useState(imagemNaoSalva);

  const nsalvo_salvo = () => {
    setImagem(getImagem === imagemNaoSalva ? imagemSalva : imagemNaoSalva);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={nsalvo_salvo}>
        <Image
          source={getImagem}
          style={{ width: 50, height: 50, margin: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BotaoSalvar;